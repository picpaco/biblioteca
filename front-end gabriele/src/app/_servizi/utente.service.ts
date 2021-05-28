import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const Utente_URL = 'http://localhost:8080/utenti';



@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http: HttpClient) { }

  getListaUtenti(): Observable<any> {
    return this.http.get(Utente_URL + '/listaUtenti', { responseType: 'json' });
  }

}
