import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router"
import { LoginServiceService } from '../ServiziAngular/loginService/loginService.service';
import { RegistrazioneService } from '../ServiziAngular/registrazioneService/registrazione.service';
import { TokenStorageService } from '../ServiziAngular/token-storage.service';
import { UserRegistationService } from '../user-registation.service';
import { Utenti } from '../utenti';

@Component({
  selector: 'app-login3-component',
  templateUrl: './login3-component.component.html',
  styleUrls: ['./login3-component.component.css']
})
export class Login3ComponentComponent  implements OnInit{
campivuoti=true;
erroreCredenziali=true;
roles: string [] = [];
loginform= new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)])

})


get email(){return this.loginform.get('email')}
get password(){return this.loginform.get('password')}

//per usare le rotte, in ingresso al costruttore creiamo la variabile router di tipo Router
//per usare il servizi, in ingresso al costruttore creiamo una variabile e gli assegnamo il nome della classe del servizio
//ricordare di aggiungere gli import
constructor(
  private router: Router,
  private ServizioLogin:LoginServiceService,
  private tokenStorage: TokenStorageService,
  private authService: UserRegistationService,
  private registrazioneService: RegistrazioneService
  ) {  }
  verifica: boolean = false;
//arrayUtenti:any;
  ngOnInit() {

  }

  email2='';
  password2='';
  autenticazione=false;

//verifica se registrato

 public verificaSeRegistrato(){
 //console.log(this.ServizioRegistrazione.utentiRegistrati(this.email2, this.password2));

//  this.arrayUtenti.forEach(
//     elemento =>{
//       if(elemento.email==this.email2 && elemento.password==this.password2 ){
//       this.verifica=true;}
//     }
//     );

const{email, password} = this.loginform.value;

  this.authService.login(email, password).subscribe(
    data => {

      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);

      //this.isLoginFallito = false;
     // this.isUtenteConnesso = true;
      this.roles = this.tokenStorage.getUser().roles;
      sessionStorage.setItem("NomeUtente", email);





     //sessionStorage.setItem("RuoloUtente", data.roles);
      //this.verifica = true;
     // this.reloadPage();


      //this.erroreCredenziali=true;
      return  this.router.navigate(['/biblioteca']);


    },
    err => {

    if(this.ServizioLogin.verificaSeVuoti(this.email2, this.password2)){
      this.campivuoti=false;
      return this.router.navigate(['/login3'])
    }else if(this.verifica==false){
      this.campivuoti=true;


     }
      this.erroreCredenziali=false;
      return  this.router.navigate(['/login3']);
    }


  );




 }


}


