import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';

const appRoutes: Routes = [
  { path: '', component: PagePrestationsComponent },

  // { path: '',
  //   redirectTo: '/prestations',
  //   pathMatch: 'full'
  // }, // <= route par défaut
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationsRooutingModule { }
