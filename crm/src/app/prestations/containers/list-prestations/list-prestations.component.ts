import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  public collection: Prestation[];
  public headers: string[];
  constructor(private ps: PrestationsService) { }

  private sub: Subscription;

  ngOnInit() {
    // this.collection = this.ps.collection;
    this.sub = this.ps.collection$.subscribe((data) => {this.collection = data; });
    this.headers = ['ID', 'Type', 'Client', 'NB jours', 'TJM HT', 'Total HT', 'Total TTC', 'Statut'];
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
