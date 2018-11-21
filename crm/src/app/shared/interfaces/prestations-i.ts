import { State } from '../enums/state.enum';

export interface PrestationsI {
  id: string;
  typePresta: string;
  client: string;
  tauxTva: number;
  tjmHt: number;
  nbJour: number;
  state: State;
}
