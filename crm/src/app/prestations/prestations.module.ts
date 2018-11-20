import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRooutingModule } from './prestations-roouting.module';

@NgModule({
  declarations: [PagePrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRooutingModule
  ]
})
export class PrestationsModule { }
