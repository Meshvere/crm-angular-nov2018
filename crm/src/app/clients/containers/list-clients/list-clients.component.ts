import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  public headers: String[] = ['ID', 'Nom', 'Email', 'Actif ?'];
  public collection: Client[];
  constructor(public cs: ClientsService) { }

  ngOnInit() {
    this.collection = this.cs.collection;
  }

}
