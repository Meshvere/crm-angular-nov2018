import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';
import { PageNotFoundComponent } from './ui/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent },
  {
    path: 'prestations',
    loadChildren: './prestations/prestations.module#PrestationsModule', // <= Charge un module en lazy loading
  },
  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule', // <= Charge un module en lazy loading
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
      { enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: PreloadAllModules}
    )
  ]
})
export class AppRoutingModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
 }
