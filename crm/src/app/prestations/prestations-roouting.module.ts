import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsModule } from './prestations.module';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { Routes, RouterModule } from '@angular/router';

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
