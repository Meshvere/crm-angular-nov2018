import { PrestationsI } from '../interfaces/prestations-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationsI {
  id: string;
  typePresta: string;
  client: string;
  tauxTva = 20;
  tjmHt = 500;
  nbJour = 0;
  state = State.OPTION;

  constructor(fields?: Partial<Prestation>) {
    if (fields) {
        Object.assign(this, fields);
    }
  }

  totalHt()  {
    return this.nbJour * this.tjmHt;
  }

  totalTtc(tva?: number)  {
    if (!tva) {
      tva = this.tauxTva;
    }

    if (tva < 0) {
      tva = 0;
    }

    return this.totalHt() * (1 + tva / 100);
  }
}
