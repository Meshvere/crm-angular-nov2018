import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { Actif } from 'src/app/shared/enums/actif.enum';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input() item: Client;
  public etat: String[];

  constructor(private cs: ClientsService) { }

  ngOnInit() {
    this.etat = Object.values(Actif);
  }

  changeEtat(evt) {
    const state = evt.target.value;

    this.cs.update(this.item, state);
  }
}
