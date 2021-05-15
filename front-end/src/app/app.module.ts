import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { HomePageComponentComponent } from './home-page-component/home-page-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuDueComponentComponent } from './menu-due-component/menu-due-component.component';
import { RegistrazioneComponentComponent } from './registrazione-component/registrazione-component.component';
import { AggiuntaLibriComponentComponent } from './aggiunta-libri-component/aggiunta-libri-component.component';
import { RimozioneCopiaComponentComponent } from './rimozione-copia-component/rimozione-copia-component.component';
import { ListaLibriComponentComponent } from './lista-libri-component/lista-libri-component.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListaUtentiComponentComponent } from './lista-utenti-component/lista-utenti-component.component';
import { ProfiloUtenteComponentComponent } from './profilo-utente-component/profilo-utente-component.component';

const appRoutes = [
  { path: '', component: LandingPageComponentComponent},
  { path: 'accesso', component: LoginComponentComponent},
  { path: 'registrazione', component: RegistrazioneComponentComponent},
  { path: 'aggiuntaLibro', component: AggiuntaLibriComponentComponent},
  { path: 'visualizzaLista', component: ListaLibriComponentComponent},
  { path: 'rimozioneLibro', component: RimozioneCopiaComponentComponent},
  { path: 'homepage', component: HomePageComponentComponent},
  { path: 'listaUtenti', component: ListaUtentiComponentComponent},
  { path: 'profiloUtente', component: ProfiloUtenteComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponentComponent,
    HomePageComponentComponent,
    LoginComponentComponent,
    FooterComponentComponent,
    MenuDueComponentComponent,
    RegistrazioneComponentComponent,
    AggiuntaLibriComponentComponent,
    RimozioneCopiaComponentComponent,
    ListaLibriComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


