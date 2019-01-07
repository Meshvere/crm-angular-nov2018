import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailPrestationComponent } from './components/client-detail-prestation/client-detail-prestation.component';
import { DetailPrestationComponent } from './components/detail-prestation/detail-prestation.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageEditComponent } from './pages/page-edit/page-edit.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { DetailPrestationResolverService } from './services/detail-prestation-resolver.service';

const appRoutes: Routes = [
  { path: '', component: PagePrestationsComponent, children: [
    {path: '', component: DetailPrestationComponent},
    {path: 'details', component: DetailPrestationComponent},
    {path: 'client', component: ClientDetailPrestationComponent}
  ] },
  {path: ':id/edit', component: PageEditComponent, resolve: {prestation: DetailPrestationResolverService}},
  { path: 'add', component: PageAddPrestationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)]
})
export class PrestationsRoutingModule {}
