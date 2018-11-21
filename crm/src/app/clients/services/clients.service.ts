import { Injectable } from '@angular/core';
import { Actif } from 'src/app/shared/enums/actif.enum';
import { Client } from 'src/app/shared/models/client.model';
import { fakeClients } from './fake-clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() {
    this.collection = fakeClients;
   }

   private _collection: Client[];

  public get collection(): Client[] {
    return this._collection;
  }

  public set collection(col: Client[]) {
    this._collection = col;
  }

  public update(item: Client, newEtat: Actif) {
    item.actif = newEtat;
  }
}
