import { Component, OnInit } from '@angular/core';
import { AuthService } from '../ServiziAngular/auth.service';
import { UserService } from '../user-service';
//import { RegistrazioneService } from '../ServiziAngular/registrazioneService/registrazione.service';

@Component({
  selector: 'app-listaUtenti-component',
  templateUrl: './listaUtenti-component.component.html',
  styleUrls: ['./listaUtenti-component.component.css']
})
export class ListaUtentiComponentComponent implements OnInit {
  arrayUtenti:any;
  constructor(private ServizioRegistrati:UserService) 
    { }

  ngOnInit() {
    //visualizza gli utenti nel db
    let resp=this.ServizioRegistrati.getUsers();
    resp.subscribe((data)=>this.arrayUtenti=data);
  }

  /*public deleteUser(id){
    let resp= this.ServizioRegistrati.deleteUser(id);
    resp.subscribe((data)=>this.arrayUtenti=data);
   }*/





  //arrayUtenti=this.ServizioRegistrati.arr;

}
