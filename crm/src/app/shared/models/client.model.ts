import { ClientI } from '../interfaces/client-i';
import { Actif } from '../enums/actif.enum';

export class Client implements ClientI {
  id: string;
  nom: string;
  email: string;
  actif = Actif.ACTIF;

  constructor(fields?: Partial<Client>) {
    if (fields) {
        Object.assign(this, fields);
    }
  }
}
