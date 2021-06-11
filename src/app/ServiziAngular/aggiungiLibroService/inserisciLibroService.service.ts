import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class InserisciLibroServiceService {


libri=[
    {Codice:"AJSUD12", Titolo:"Titolo 1", Autore:"Autore 1", NumeroCopie:3},
    {Codice:"KDJSN90", Titolo:"Titolo 2", Autore:"Autore 2", NumeroCopie:5},
    {Codice:"JFJSN76", Titolo:"Titolo 3", Autore:"Autore 3", NumeroCopie:7}

  ]
constructor(private http: HttpClient) { }
public getLibri(){
  return this.http.get("http://localhost:8080/libri/", {responseType: 'json'});
}





// public doRegistration(nome: string, cognome: string, email: string, password: string): Observable<any>{
//   return this.http.post("http://localhost:8080/autorizzazione/registrazione",
//  {nome,
//   cognome,
//   email,
//   password}
//  );
// }

public aggiungiLibro(codice, titolo, autore, numeroCopie): Observable<any>{

  return this.http.post("http://localhost:8080/libri/aggiungi",
 {
codice,
titolo,
autore,
numeroCopie
}

  );

  //this.libri.push({Codice:Codice, Titolo:titolo, Autore:Autore, NumeroCopie:numeroCopie},);
}


rimuoviLibro(Codice){






/*
  Object.entries(this.libri).forEach(

      ([key, value]) => {
                         // console.log(value.Email)
                          if(value.Codice==Codice){
                                                    delete this.libri[key];
                          }
      }
  );
*/

}
}
