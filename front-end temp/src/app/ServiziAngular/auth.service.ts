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

  login(username: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + 'accesso', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + 'registrazione', {
      username,
      email,
      password
    }, httpOptions);
  }
}