import { Actif } from '../enums/actif.enum';

export interface ClientI {
  id: string;
  nom: string;
  email: string;
  actif: Actif;
}
