import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessoComponent } from './accesso/accesso.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { PaginaPrincipaleComponent } from './pagina-principale/pagina-principale.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { BoardAmministratoreComponent } from './board-amministratore/board-amministratore.component';
import { BoardUtenteComponent } from './board-utente/board-utente.component';

import { authInterceptorProviders } from './_helpers/autorizzazione.interceptor';
import { FooterComponent } from './footer/footer.component';
import { AggiungiLibroComponent } from './aggiungi-libro/aggiungi-libro.component';
import { RimuoviLibroComponent } from './rimuovi-libro/rimuovi-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessoComponent,
    RegistrazioneComponent,
    PaginaPrincipaleComponent,
    ProfiloComponent,
    BoardAmministratoreComponent,
    BoardUtenteComponent,
    FooterComponent,
    AggiungiLibroComponent,
    RimuoviLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
