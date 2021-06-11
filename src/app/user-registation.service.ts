import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) { }


  public doRegistration(nome: string, cognome: string, email: string, password: string): Observable<any>{
    return this.http.post("http://localhost:8080/autorizzazione/registrazione",
   {nome,
    cognome,
    email,
    password}
   );
  }


  public login(email: string, password: string): Observable<any>{
    return this.http.post("http://localhost:8080/autorizzazione/accesso", {
      email,
      password
    });
  }
  public getUsers(){
    return this.http.get("http://localhost:9090/getAllUsers");
  }

  public getUserByEmail(email: string){
    return this.http.get("http://localhost:9090//findUser/"+email);
  }

  public deleteUser(id: string){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }
}
