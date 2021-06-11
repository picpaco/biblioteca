import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../ServiziAngular/loginService/loginService.service';
import { RegistrazioneService } from '../ServiziAngular/registrazioneService/registrazione.service';

@Component({
  selector: 'app-navabardue-component',
  templateUrl: './navabardue-component.component.html',
  styleUrls: ['./navabardue-component.component.css']
})
export class NavabardueComponentComponent implements OnInit {

  rout ="'login3'";
  log = "Login";
  utente=sessionStorage.getItem("RuoloUtente");
  constructor(private ServizioLogin:LoginServiceService, public BasicAuth: RegistrazioneService) { }

  ngOnInit() {
  }

  isUserAuthenticated = true;

  public authenticate(){
    this.isUserAuthenticated = false;
    return this.isUserAuthenticated;
  }

  public deauthenticate(){
    this.isUserAuthenticated = true;
    return this.isUserAuthenticated;
  }


  public routeChange(){

//if(this.ServizioLogin.autenticazione()==true){ }
if(this.log==="Login"){
this.log ="Logout";
this.rout = "'biblioteca'";
  }
  else{
    this.log ="Login";
    this.rout ="'login3'";
  }
  }
}
