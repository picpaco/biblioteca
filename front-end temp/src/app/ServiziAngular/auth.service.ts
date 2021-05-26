import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/autorizzazione/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + 'accesso', {
      email,
      password
    }, httpOptions);
  }

  register(nome: string, cognome: string, email: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + 'registrazione', {
      nome,
      cognome,
      email,
      password
    }, httpOptions);
  }
}
