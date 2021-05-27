import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const Utente_URL = 'http://localhost:8080/utenti/';

const Biblio_URL = 'http://localhost:8080/libri';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(Biblio_URL + '/', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(Biblio_URL + '/', { responseType: 'text' });
  }

  

  getAdminBoard(): Observable<any> {
    return this.http.get(Utente_URL + 'listaUtenti', { responseType: 'text' });
  }

}
