import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { envFirebase } from '../environments/environments.firebase';
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
    AppRoutingModule,
    AngularFireModule.initializeApp(envFirebase.firebase),
    AngularFirestoreModule,
    HttpClientModule
  ],
  // services
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  // quel component sera chargé à l'init de l'app
  bootstrap: [AppComponent]
})
export class AppModule { }
