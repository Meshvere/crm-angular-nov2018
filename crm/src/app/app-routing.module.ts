import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';
import { environment } from 'src/environments/environment';
import { PageNotFoundComponent } from './ui/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent },
  {
    path: 'prestations',
    loadChildren: './prestations/prestations.module#PrestationsModule', // <= Charge un module en lazy loading
  },

  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }, // <= route par défaut
  { path: '**', component: PageNotFoundComponent } // <= 404 not found
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: !environment.production } // <-- debugging purposes only
    )
  ]
})
export class AppRoutingModule { }
