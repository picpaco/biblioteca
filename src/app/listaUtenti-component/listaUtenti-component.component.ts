import { Component, OnInit } from '@angular/core';
import { RegistrazioneService } from '../ServiziAngular/registrazioneService/registrazione.service';

@Component({
  selector: 'app-listaUtenti-component',
  templateUrl: './listaUtenti-component.component.html',
  styleUrls: ['./listaUtenti-component.component.css']
})
export class ListaUtentiComponentComponent implements OnInit {
  arrayUtenti:any;
  constructor(private ServizioRegistrati:RegistrazioneService) { }

  ngOnInit() {
    //visualizza gli utenti nel db
    // let resp=this.ServizioRegistrati.getUsers();
    // resp.subscribe((data)=>this.arrayUtenti=data);


    this.ServizioRegistrati.getUsers().subscribe(
      data=>{
        this.arrayUtenti= data;

      },
      err=>{
        this.arrayUtenti=JSON.parse(err.error).message;
      }
    )
  }

  public deleteUser(id){
    let resp= this.ServizioRegistrati.deleteUser(id);
    resp.subscribe((data)=>this.arrayUtenti=data);
   }





  //arrayUtenti=this.ServizioRegistrati.arr;

}
