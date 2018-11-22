import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(private cs: ClientsService, private router: Router) { }

  ngOnInit() {
  }

  public add(item: Client) {
    this.cs.add(item);
    this.router.navigate(['/clients']);
  }
}
