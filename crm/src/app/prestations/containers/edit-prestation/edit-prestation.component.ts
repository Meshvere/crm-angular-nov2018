import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit, OnDestroy {

  public item: Prestation = new Prestation();
  constructor(private ps: PrestationsService, private ar: ActivatedRoute, private router: Router) { }

  public sub: Subscription;

  ngOnInit() {
    this.sub = this.ar.data
    .subscribe((data: { prestation: Prestation }) => {
     this.item = new Prestation(data.prestation);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  update(upItem: Prestation) {
    upItem.id = this.item.id;
    this.ps.update(upItem).then((data) => {
      this.router.navigate(['/prestations']);
    });
  }
}
