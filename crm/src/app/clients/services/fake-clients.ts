import { Client } from 'src/app/shared/models/client.model';
import { Actif } from 'src/app/shared/enums/actif.enum';

export const fakeClients: Client[] = [
  new Client({'id': '12', 'nom': 'Tu sors', email: 'a@b.fr'}),
  new Client({'id': '666', 'nom': 'Lui', email: 'a@hell.burn', actif: Actif.INACTIF})
];
