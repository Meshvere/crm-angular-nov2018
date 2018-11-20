import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  public collection: Prestation[];
  public headers: string[];
  constructor(private ps: PrestationsService) { }

  ngOnInit() {
    this.collection = this.ps.collection;
    this.headers = ['Type', 'Client', 'NB jours', 'TJM HT', 'Total HT', 'Total TTC', 'Statut'];
  }

}
