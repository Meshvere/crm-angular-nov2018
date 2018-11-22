import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { ReactiveFormPrestationComponent } from './components/reactive-form-prestation/reactive-form-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';

@NgModule({
  declarations: [PagePrestationsComponent, ListPrestationsComponent, PrestationComponent,
    PageAddPrestationComponent, AddPrestationComponent, FormPrestationComponent, ReactiveFormPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    TemplatesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrestationsModule { }
