import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(private ps: PrestationsService, private router: Router) { }

  ngOnInit() {
  }

  add(item: Prestation) {
    this.ps.add(item).then(() => {
      this.router.navigate(['/prestations']);
    });

  }
}
