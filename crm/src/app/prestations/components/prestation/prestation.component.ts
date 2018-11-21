import { Component, Input, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() item: Prestation;
  public states: string[] = Object.values(State);

  constructor(private ps: PrestationsService) { }

  ngOnInit() {
  }

  changeState(evt) {
    const state = evt.target.value;

    this.ps.update(this.item, state);
  }
}
