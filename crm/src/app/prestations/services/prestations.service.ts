import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection$: Observable<Prestation[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Prestation>('prestations');

    // Version longue
    // this.collection$ = this.itemsCollection.valueChanges().pipe(
    //   map(
    //     (data) => {
    //       return data.map(
    //         (presta) => {
    //           return new Prestation(presta);
    //         }
    //       );
    //     }
    //   )
    // );

    // Version courte
    this.collection$ = this.itemsCollection
      .valueChanges()
      .pipe(map(data => data.map(presta => new Prestation(presta))));
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
    // return this.http.post('urlapi/prestations', item);
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
    // return this.http.patch('urlapi/prestations/'+item.id, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection
      .doc(item.id)
      .delete()
      .catch(e => {
        console.log(e);
      });
    // return this.http.delete(`urlapi/prestations/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlaspi/prestations/${id}`);
  }
}
