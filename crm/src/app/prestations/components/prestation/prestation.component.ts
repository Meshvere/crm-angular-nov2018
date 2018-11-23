import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
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
  public faSearch = faSearch;
  public faPen = faPen;

  constructor(
    private ps: PrestationsService,
    private router: Router,
    private ar: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.ar);

  }

  changeState(evt) {
    const state = evt.target.value;

    this.ps.update(this.item, state).then(response => {
      this.item.state = state;
    });
  }

  public delete() {
    this.ps.delete(this.item).then(() => {
      alert('Prestation supprimée');
    });
  }

  public detail() {
    this.ps.curPresta$.next(this.item);
    this.ps.clientItem$.next(this.item.client);
    // console.log(this.ps.curPresta$.value); // dernière valeur stockée par le BehaviorSubject

    this.router.navigate(['details'], { relativeTo: this.ar }); // ajoute details à la route existante
  }

  public edit() {}
}
