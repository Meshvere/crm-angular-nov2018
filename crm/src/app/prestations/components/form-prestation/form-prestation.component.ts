import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  @Output() nitem: EventEmitter<Prestation> = new EventEmitter(); // Importer depuis Angular core
  public init = new Prestation();

  public states: String[];

  constructor() { }

  ngOnInit() {
    this.states = Object.values(State);
  }

  onSubmit() {
    this.nitem.emit(this.init);
  }
}
