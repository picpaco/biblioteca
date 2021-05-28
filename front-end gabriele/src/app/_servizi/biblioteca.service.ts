import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const Biblio_URL = 'http://localhost:8080/libri';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  constructor(private http: HttpClient) { }

  getListaLibri(): Observable<any> {
    return this.http.get(Biblio_URL + '/', { responseType: 'json' });
  }

  rimuoviLibro(codice: string): Observable<any> {
    return this.http.delete(Biblio_URL + "/copia" , httpOptions);// httpOptions);
  }

  aggiungiLibro(codice: string, titolo: string, autore: string): Observable<any> {
    return this.http.put(Biblio_URL + "/aggiungi", {
      codice,
      titolo,
      autore
    }, httpOptions);
  }

}
