import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Actif } from 'src/app/shared/enums/actif.enum';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input() item: Client;
  public etat: String[];
  public faTrash = faTrash;

  constructor(private cs: ClientsService) { }

  ngOnInit() {
    this.etat = Object.values(Actif);
  }

  changeEtat(evt) {
    const state = evt.target.value;

    this.cs.update(this.item, state);
  }

  delete() {
    this.cs.delete(this.item).then(() => {
      alert('Client supprimé');
    });
  }
}
