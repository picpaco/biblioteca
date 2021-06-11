import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrazioneService } from '../ServiziAngular/registrazioneService/registrazione.service';
import { TokenStorageService } from '../ServiziAngular/token-storage.service';
import { UserRegistationService } from '../user-registation.service';
import { Utenti } from '../utenti';
//import { Utenti } from './utenti';
//import { User } from './utenti';
//import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-registrati-component',
  templateUrl: './registrati-component.component.html',
  styleUrls: ['./registrati-component.component.css']
})
export class RegistratiComponentComponent implements OnInit {
//variabili per controllo campi
campivuoti=true;
registrazzioneAvvenuta=true;
pulsante=true;

  nome2: string = '';
  cognome2:string='';
  email2: string ='';
  password2: string ='';

//--------------------------------------------------------------
  user: Utenti=new Utenti("", "", "","");

  message:any;

//----------------------------------------------------------------
loginform= new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  cognome: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
  nome: new FormControl('', [Validators.required, Validators.maxLength(20)]),
})

get nome(){return this.loginform.get('nome')}
get email(){return this.loginform.get('email')}
get password(){return this.loginform.get('password')}
get cognome(){return this.loginform.get('cognome')}




//per usare le rotte, in ingresso al costruttore creiamo la variabile router di tipo Router
//per usare il servizi, in ingresso al costruttore creiamo una variabile e gli assegnamo il nome della classe del servizio
//ricordare di aggiungere gli import
constructor(
  private router: Router,
  private ServizioRegistrazione:RegistrazioneService,
  private ServizioRegistrazione1: UserRegistationService,
  private tokenStorage: TokenStorageService
  ) {
  }


  ngOnInit() {
  }



//controllo credenzilai
//public registerNow()
public verificaCampi(){
  if (this.ServizioRegistrazione.verificaNomeECognome(this.nome2, this.cognome2) &&
      this.ServizioRegistrazione.varicaCampiVuoti(this.nome2, this.cognome, this.email2, this.password2)
  ){
    //registrazione vecchia
    // let resp=this.ServizioRegistrazione.inserisciUtente(this.user);
    // resp.subscribe((data)=>this.message=data);

    //registrazione nuova
    let resp=this.ServizioRegistrazione1.doRegistration(this.nome2, this.cognome2, this.email2, this.password2);
    resp.subscribe((data)=>this.message=data);


    this.campivuoti=true;
    this.pulsante=false;
    return this.registrazzioneAvvenuta=false;
//this.router.navigate(['/login3'])



  }else{
 this.campivuoti=false;
  }
}




}








