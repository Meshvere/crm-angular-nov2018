import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UiModule } from './ui/ui.module';


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
    NgbModule.forRoot()
  ],
  // services
  providers: [],
  // quel component sera chargé à l'init de l'app
  bootstrap: [AppComponent]
})
export class AppModule { }
