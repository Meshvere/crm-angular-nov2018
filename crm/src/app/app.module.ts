import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UiModule } from './ui/ui.module';

registerLocaleData(localeFr);

@NgModule({
  // composants
  declarations: [
    AppComponent
  ],
  // modules
  imports: [
    BrowserModule,
    LoginModule,
    UiModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  // services
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  // quel component sera chargé à l'init de l'app
  bootstrap: [AppComponent]
})
export class AppModule { }
