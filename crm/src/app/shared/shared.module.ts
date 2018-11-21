import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { ActifDirective } from './directives/actif.directive';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective, ActifDirective],
  exports: [TotalPipe, TableauComponent, StateDirective, ActifDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
