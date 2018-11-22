import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientComponent } from './components/client/client.component';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';

@NgModule({
  declarations: [PageClientsComponent, ListClientsComponent, ClientComponent, PageAddClientComponent, AddClientComponent,
    ClientFormComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    TemplatesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
