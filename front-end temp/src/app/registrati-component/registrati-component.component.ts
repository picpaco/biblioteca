import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { RegistrazioneService } from '../ServiziAngular/registrazioneService/registrazione.service';
import { Utenti } from '../utenti';
import { AuthService } from '../ServiziAngular/auth.service';
//import { Utenti } from './utenti';
//import { User } from './utenti';
//import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-registrati-component',
  templateUrl: './registrati-component.component.html',
  styleUrls: ['./registrati-component.component.css']
})
export class RegistratiComponentComponent implements OnInit {

  form: any = {
    nome: null,
    cognome: null,
    email: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const {nome, cognome, email, password} = this.form;

    this.authService.register(nome, cognome, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  inserisciUtente(){}
/*
//variabili per controllo campi
campivuoti=true;
registrazioneAvvenuta=true;
pulsante=true;

  nome2: string = '';
  cognome2: string = '';
  email2: string ='';
  password2: string ='';

//--------------------------------------------------------------
  user: Utenti=new Utenti("", "", "", "");

  message:any;

//----------------------------------------------------------------
loginform= new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
  nome: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  cognome: new FormControl('', [Validators.required, Validators.maxLength(20)]),
})

get nome(){return this.loginform.get('nome')}
get cognome(){return this.loginform.get('cognome')}
get email(){return this.loginform.get('email')}
get password(){return this.loginform.get('password')}





//per usare le rotte, in ingresso al costruttore creiamo la variabile router di tipo Router
//per usare il servizi, in ingresso al costruttore creiamo una variabile e gli assegnamo il nome della classe del servizio
//ricordare di aggiungere gli import
constructor( private router: Router, private ServiziAuth :AuthService
  //private ServizioRegistrazione:RegistrazioneService
  ) {}



  ngOnInit() {
  }



//controllo credenzilai
//public registerNow()
public inserisciUtente(){
  this.ServiziAuth.register(this.nome2, this.cognome2, this.email2, this.password2);
}



*/
}
