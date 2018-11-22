import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-reactive-form-prestation',
  templateUrl: './reactive-form-prestation.component.html',
  styleUrls: ['./reactive-form-prestation.component.scss']
})
export class ReactiveFormPrestationComponent implements OnInit {
  @Output() nitem: EventEmitter<Prestation> = new EventEmitter(); // Importer depuis Angular core
  private init = new Prestation();

  public states: String[];

  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.states = Object.values(State);
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      typePresta: [this.init.typePresta, Validators.required],
      client: [this.init.client, Validators.compose([Validators.required, Validators.minLength(3)])],
      tauxTva: [this.init.tauxTva],
      tjmHt: [this.init.tjmHt],
      nbJour: [this.init.nbJour],
      state: [this.init.state],
    });
  }

  public onSubmit() {
    this.nitem.emit(this.form.value);
  }

  public isError(formControlName: string): boolean {
    return this.form.get(formControlName).invalid && this.form.get(formControlName).touched;
  }
}
