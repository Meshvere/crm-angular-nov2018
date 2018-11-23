import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-presta-client-actif',
  templateUrl: './presta-client-actif.component.html',
  styleUrls: ['./presta-client-actif.component.scss']
})
export class PrestaClientActifComponent implements OnInit {
  public curPrestaClient$: Subject<string> = new Subject();
  constructor(private ps: PrestationsService) { }

  ngOnInit() {
    this.curPrestaClient$ = this.ps.clientItem$;
  }

}
