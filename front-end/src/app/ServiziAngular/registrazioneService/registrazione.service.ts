import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { Utenti } from 'src/app/utenti';


@Injectable({
  providedIn: 'root'
})

export class RegistrazioneService {
constructor(private http:HttpClient) { }

  public inserisciUtente(utente){
    return this.http.post("http://localhost:9090/registra",utente,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:9090/utenti");
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:9090/cancellaUtente/"+id);
  }



verificaNome(Nome){

  if (Nome.length<20 && Nome.length>1 ){
      return true;
    }else{
      return false;

    }

  }
  varicaCampiVuoti(Nome, Email, password){

if(Nome=="" || Email=="" || password==""){
return false
}else {return true;}
    }



    arrayUtenti:any;


registrato=false;




utentiRegistrati(Email, password){
  let resp=this.getUsers();
    resp.subscribe((data)=>this.arrayUtenti=data);
    this.arrayUtenti.forEach(
    elemento =>{
      //console.log(elemento.name)
      if(elemento.email==Email && elemento.password==password ){
        sessionStorage.setItem("NomeUtente", elemento.name);
        this.registrato=true;}
    }
    );

return this.registrato;
}


restituisceNomeUtenteLoggato(){

  let utente = sessionStorage.getItem("NomeUtente");
  return (sessionStorage.getItem("NomeUtente")!= null) ? utente :"";
}

restituisceBooleanoSeUtenteEloggato(){
  return (sessionStorage.getItem("NomeUtente")!= null) ? true :false;
}

}



