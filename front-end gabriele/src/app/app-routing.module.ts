import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoComponent } from './accesso/accesso.component';
import { AggiungiLibroComponent } from './aggiungi-libro/aggiungi-libro.component';
import { BoardAmministratoreComponent } from './board-amministratore/board-amministratore.component';
import { BoardUtenteComponent } from './board-utente/board-utente.component';
import { PaginaPrincipaleComponent } from './pagina-principale/pagina-principale.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { RimuoviLibroComponent } from './rimuovi-libro/rimuovi-libro.component';

const routes: Routes = [
  { path: 'pagina-principale', component: PaginaPrincipaleComponent },
  { path: 'accesso', component: AccessoComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'profilo', component: ProfiloComponent },
  { path: 'libri', component: BoardUtenteComponent },
  //{ path: 'utenti', component: ListaUtentiComponent },
  { path: 'utenti', component: BoardAmministratoreComponent },
  { path: 'aggiungiLibro', component: AggiungiLibroComponent },
  { path: 'rimuoviLibro', component: RimuoviLibroComponent },
  { path: '', redirectTo: 'pagina-principale', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
