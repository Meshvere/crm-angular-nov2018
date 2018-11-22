import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actif } from 'src/app/shared/enums/actif.enum';
import { Client } from 'src/app/shared/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private itemsCollection: AngularFirestoreCollection<Client>;
  private _collection$: Observable<Client[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Client>('clients');
    this.collection$ = this.itemsCollection
      .valueChanges()
      .pipe(map(data => data.map(presta => new Client(presta))));
   }

  public get collection$(): Observable<Client[]> {
    return this._collection$;
  }

  public set collection$(col: Observable<Client[]>) {
    this._collection$ = col;
  }

  add(item: Client): Promise<any> {
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

  public update(item: Client, actif?: Actif): Promise<any> {
    const client = { ...item };
    if (actif) {
      client.actif = actif;
    }
    return this.itemsCollection
      .doc(item.id)
      .update(client)
      .catch(e => {
        console.log(e);
      });
    // return this.http.patch('urlapi/prestations/'+item.id, presta);
  }

  public delete(item: Client): Promise<any> {
    return this.itemsCollection
      .doc(item.id)
      .delete()
      .catch(e => {
        console.log(e);
      });
    // return this.http.delete(`urlapi/prestations/${item.id}`);
  }

  getPrestation(id: string): Observable<Client> {
    return this.itemsCollection.doc<Client>(id).valueChanges();
    // return this.http.get(`urlaspi/prestations/${id}`);
  }
}
