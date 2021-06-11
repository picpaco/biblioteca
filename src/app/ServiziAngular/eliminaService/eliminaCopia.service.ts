import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Copia } from 'src/app/Copia';

@Injectable({
  providedIn: 'root'
})
export class EliminaCopiaService {

constructor(private http: HttpClient) { }


public eliminaCopia(codice : string): Observable<any>{

  return this.http.put("http://localhost:8080/libri/copia/",
 {
    codice
 }
);
}

  //this.libri.push({Codice:Codice, Titolo:titolo, Autore:Autore, NumeroCopie:numeroCopie},);


}
