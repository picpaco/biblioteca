import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { HomePageComponentComponent } from './home-page-component/home-page-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuDueComponentComponent } from './menu-due-component/menu-due-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponentComponent,
    HomePageComponentComponent,
    LoginComponentComponent,
    FooterComponentComponent,
    MenuDueComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
