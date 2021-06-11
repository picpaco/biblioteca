import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrenotaService {

constructor(private http: HttpClient) { }

  prestito(codiceLibro, codiceCopia): Observable<any>{

    return this.http.put("http://localhost:8080/libri/prestito",
  {
    "codice": codiceLibro,
    "copie": [
         {
            "codice": codiceCopia,
            "inPrestito": true
        }
    ]
  },
  {responseType: 'json'}
    );
}

}

