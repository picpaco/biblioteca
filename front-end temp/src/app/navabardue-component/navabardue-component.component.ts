import { Component, OnInit } from '@angular/core';
//import { LoginServiceService } from '../ServiziAngular/loginService/loginService.service';
import { TokenStorageService } from '../ServiziAngular/token-storage.service';
//import { RegistrazioneService } from '../ServiziAngular/registrazioneService/registrazione.service';

@Component({
  selector: 'app-navabardue-component',
  templateUrl: './navabardue-component.component.html',
  styleUrls: ['./navabardue-component.component.css']
})
export class NavabardueComponentComponent implements OnInit {

  private roles: string[] = [];
  isUtenteConnesso = false;
  showAdminBoard = false;
  showUserBoard = false;
  email?: string

  constructor(/*private ServizioLogin:LoginServiceService,*/ private TokenStorageService: TokenStorageService

    // publicBasicAuth: RegistrazioneService

    ) { }

    ngOnInit(): void{
      this.isUtenteConnesso = !!this.TokenStorageService.getToken();

      if(this.isUtenteConnesso){
        const user = this.TokenStorageService.getUser();
        this.roles = user.roles;

        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showUserBoard = this.roles.includes('ROLE_USER');

        this.email = user.email;
      }
    }

    logout(): void{
      console.log("UTENTE"+this.isUtenteConnesso);
      //this.isUtenteConnesso = true;
      this.TokenStorageService.signOut();
      window.location.reload();
    }

  isUserAuthenticated = true;

  /*public authenticate(){
    this.isUserAuthenticated = false;
    return this.isUserAuthenticated;
  }

  public deauthenticate(){
    this.isUserAuthenticated = true;
    return this.isUserAuthenticated;
  }*/

}
