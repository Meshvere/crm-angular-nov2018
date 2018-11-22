import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actif } from 'src/app/shared/enums/actif.enum';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  @Output() nitem: EventEmitter<Client> = new EventEmitter(); // Importer depuis Angular core
  private init = new Client();

  public actifs: String[];

  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.actifs = Object.values(Actif);
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      nom: [this.init.nom, Validators.required],
      email: [this.init.email, Validators.compose([Validators.required, Validators.email])],
      actif: [this.init.actif, Validators.required],
    });
  }

  public onSubmit() {
    this.nitem.emit(this.form.value);
  }

  public isError(formControlName: string): boolean {
    return this.form.get(formControlName).invalid && this.form.get(formControlName).touched;
  }
}
