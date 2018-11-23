import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './user-interface/ui/ui.component';
import { PrestationsModule } from '../prestations/prestations.module';

@NgModule({
  declarations: [UiComponent, FooterComponent, HeaderComponent, NavComponent],
  exports: [UiComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    PrestationsModule
  ]
})
export class UiModule { }
