import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoComponent } from './accesso/accesso.component';
import { BoardAmministratoreComponent } from './board-amministratore/board-amministratore.component';
import { BoardUtenteComponent } from './board-utente/board-utente.component';
import { PaginaPrincipaleComponent } from './pagina-principale/pagina-principale.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';

const routes: Routes = [
  { path: 'pagina-principale', component: PaginaPrincipaleComponent },
  { path: 'accesso', component: AccessoComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'profilo', component: ProfiloComponent },
  { path: 'utente', component: BoardUtenteComponent },
  //{ path: 'utenti', component: ListaUtentiComponent },
  { path: 'utenti', component: BoardAmministratoreComponent },
  { path: '', redirectTo: 'pagina-principale', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
