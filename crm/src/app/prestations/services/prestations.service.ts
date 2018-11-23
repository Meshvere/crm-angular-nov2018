import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection$: Observable<Prestation[]>;

  public curPresta$: BehaviorSubject<Prestation> = new BehaviorSubject(null);
  public clientItem$: Subject<string> = new Subject();

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    this.itemsCollection = afs.collection<Prestation>('prestations');

    // Version longue
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      map(dataFlux => {
        this.curPresta$.next(dataFlux[0]);
        this.clientItem$.next(dataFlux[0].client);
        return dataFlux.map(unePresta => {
          return new Prestation(unePresta);
        });
      })
    );

    // Version courte
    // this.collection$ = this.itemsCollection
    //   .valueChanges()
    //   .pipe(map(dataFlux => dataFlux.map(unePresta => new Prestation(unePresta)))); // Les return sont implicites

    // Version HTTP
    // this.collection$ = this.http.get<Prestation[]>('urlapi/prestations').pipe(
    //   map(dataFlux => {
    //     this.curPresta$.next(dataFlux[0]);

    //     return dataFlux.map(unePresta => {
    //       return new Prestation(unePresta);
    //     });
    //   })
    // );
  }

  public get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  public set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection
      .doc(id)
      .set(prestation)
      .catch(e => {
        console.log(e);
      });
    // return this.http.post('urlapi/prestations/add', item);
  }

  update(item: Prestation, state?: State): Promise<any> {
    const presta = { ...item };
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection
      .doc(item.id)
      .update(presta)
      .catch(e => {
        console.log(e);
      });
    // return this.http.patch('urlapi/prestations/'+item.id/update, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection
      .doc(item.id)
      .delete()
      .catch(e => {
        console.log(e);
      });
    // return this.http.delete(`urlapi/prestations/${item.id}`); // Ecriture en ES6
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlaspi/prestations/${id}`);
  }
}
