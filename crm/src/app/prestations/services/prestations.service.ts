import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  constructor() {
    this.collection = fakePrestations;
  }

  // //java way of life
  // private collection: Prestation [];

  // public getCollection(): Prestation[] {
  //   return this.collection;
  // }

  // public setCollection(col: Prestation[]) {
  //   this.collection = col;
  // }

  // Angular way of life
  private _collection: Prestation[];

  public get collection(): Prestation[] {
    return this._collection;
  }

  public set collection(col: Prestation[]) {
    this._collection = col;
  }

  public update(item: Prestation, newState: State) {
    item.state = newState;
  }

  public add(item: Prestation) {
    this.collection.push(item);
  }
}
