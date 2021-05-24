import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  /*public doRegistration(user){
    return this.http.post("http://localhost:8080/autorizzazione/registrazione",user,{responseType:'text' as 'json'});
  }*/

  public getUsers(){
    return this.http.get("http://localhost:8080/autorizzazione/listaUtenti");
  }

 /* public getUserByEmail(email){
    return this.http.get("http://localhost:9090//findUser/"+email);
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }*/
}
