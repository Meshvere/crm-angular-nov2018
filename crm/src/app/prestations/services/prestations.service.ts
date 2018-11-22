import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
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
    this.collection$ = this.itemsCollection.valueChanges().pipe(map(data => data.map(presta => new Prestation(presta))));
  }

  public get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  public set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  public update(item: Prestation, newState: State) {
    item.state = newState;
  }

  public add(item: Prestation) {
    this.itemsCollection.add(item);
  }
}
