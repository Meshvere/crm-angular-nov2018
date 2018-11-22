import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() item: Prestation;
  public states: string[] = Object.values(State);
  public faTrash = faTrash;

  constructor(private ps: PrestationsService) { }

  ngOnInit() {
  }

  changeState(evt) {
    const state = evt.target.value;

    this.ps.update(this.item, state).then((response) => {
      this.item.state = state;
    });
  }

  public delete() {
    this.ps.delete(this.item).then(() => {
      alert('Prestation supprimée');
    });
  }
}
