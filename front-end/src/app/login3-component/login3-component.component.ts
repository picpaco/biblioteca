import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router"
import { LoginServiceService } from '../ServiziAngular/loginService/loginService.service';
import { RegistrazioneService } from '../ServiziAngular/registrazioneService/registrazione.service';

@Component({
  selector: 'app-login3-component',
  templateUrl: './login3-component.component.html',
  styleUrls: ['./login3-component.component.css']
})
export class Login3ComponentComponent  {
campivuoti=true;
erroreCredenziali=true;
loginform= new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)])

})


get email(){return this.loginform.get('email')}
get password(){return this.loginform.get('password')}

//per usare le rotte, in ingresso al costruttore creiamo la variabile router di tipo Router
//per usare il servizi, in ingresso al costruttore creiamo una variabile e gli assegnamo il nome della classe del servizio
//ricordare di aggiungere gli import
constructor( private router: Router, private ServizioLogin:LoginServiceService, private ServizioRegistrazione:RegistrazioneService, ) {

  }
arrayUtenti:any;
  ngOnInit() {

  let resp=this.ServizioRegistrazione.getUsers();
    resp.subscribe((data)=>this.arrayUtenti=data);

  }

  email2='';
  password2='';
  autenticazione=false;



  verifica: boolean = false;
//verifica se registrato
 public verificaSeRegistrato(){
 console.log(this.ServizioRegistrazione.utentiRegistrati(this.email2, this.password2));
  this.arrayUtenti.forEach(
    elemento =>{
      if(elemento.email==this.email2 && elemento.password==this.password2 ){
      this.verifica=true;}
    }
    );


   if(this.verifica==true ){

    return  this.router.navigate(['/biblioteca']);
   }else if(this.ServizioLogin.verificaSeVuoti(this.email2, this.password2)){
    this.campivuoti=false;
    return this.router.navigate(['/login3'])
  }else if(this.verifica==false){
    this.campivuoti=true;
    this.erroreCredenziali=false;
     return  this.router.navigate(['/login3']);
   }


 }


}


