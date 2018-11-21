import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';

export const fakePrestations: Prestation[] = [
    new Prestation({id: '1', typePresta: 'Formation', client: 'Modis', nbJour: 3, state: State.ANNULE}),
    new Prestation({id: '2', typePresta: 'Coaching', client: 'Nemesys'}),
    new Prestation({id: '666', typePresta: 'Gestion', client: 'World Company', tjmHt: 666, state: State.CONFIRME, nbJour: 7}),
    new Prestation({id: '7', typePresta: 'Déformation', client: 'Nemesys', tauxTva: 0, nbJour: 1})
];
