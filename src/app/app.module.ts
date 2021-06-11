import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { UserRegistationService } from './user-registation.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NavabardueComponentComponent } from './navabardue-component/navabardue-component.component';
import { CaroselloComponentComponent } from './carosello-component/carosello-component.component';
import { HomepageComponentComponent } from './Homepage-component/homepage-component.component';
import { RegistratiComponentComponent } from './registrati-component/registrati-component.component';
import { TabellaListaLibriComponentComponent } from './tabellaListaLibri-component/tabellaListaLibri-component.component';
import { AggiungiLibroComponentComponent } from './aggiungiLibro-component/aggiungiLibro-component.component';
import { RimuoviLibroComponentComponent } from './rimuoviLibro-component/rimuoviLibro-component.component';
import { Login3ComponentComponent } from './login3-component/login3-component.component';
import { ListaUtentiComponentComponent } from './listaUtenti-component/listaUtenti-component.component';
import { LogoutComponentComponent } from './logout-component/logout-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { NavabardueComponentComponent } from './navabardue-component/navabardue-component.component';
import { ProfiloUtenteComponentComponent } from './profiloUtente-component/profiloUtente-component.component';
import { RouterModule } from '@angular/router';
import { ControlloLoginService } from './ServiziAngular/protezione/controlloLogin.service';
import { authInterceptorProviders } from './_helpers/autorizzazione.interceptor';
import { PrenotaComponent } from './prenota/prenota.component';





const appRoutes = [
  { path: '', component: CaroselloComponentComponent },
  { path: 'biblioteca', component: HomepageComponentComponent, canActivate:[ControlloLoginService] },
  { path: 'registrazione', component: RegistratiComponentComponent },
  { path: 'listaLibri', component: TabellaListaLibriComponentComponent, canActivate:[ControlloLoginService] },
  { path: 'aggiungiLibro', component: AggiungiLibroComponentComponent, canActivate:[ControlloLoginService] },
  { path: 'rimuoviLibro', component: RimuoviLibroComponentComponent, canActivate:[ControlloLoginService] },
  { path: 'login3', component: Login3ComponentComponent },
  { path: 'utenti', component: ListaUtentiComponentComponent, canActivate:[ControlloLoginService] },
  { path: 'logout', component: LogoutComponentComponent, canActivate:[ControlloLoginService] },
  { path: 'prenota', component: PrenotaComponent, canActivate:[ControlloLoginService] },
  { path: '*', component: CaroselloComponentComponent }

];

@NgModule({
  declarations: [
    AppComponent,

    //SerachDeleteComponent,

    FooterComponentComponent,
    LandingPageComponentComponent,
    CaroselloComponentComponent,
    NavabardueComponentComponent,
    HomepageComponentComponent,
    TabellaListaLibriComponentComponent,
    RegistratiComponentComponent,
    AggiungiLibroComponentComponent,
    RimuoviLibroComponentComponent,
    ProfiloUtenteComponentComponent,
    Login3ComponentComponent,
    ListaUtentiComponentComponent,
      LogoutComponentComponent,
      PrenotaComponent
   ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes)
  ],
  //providers: [UserRegistationService],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
