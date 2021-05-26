import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InserisciLibroServiceService {


libri=[
    {Codice:"AJSUD12", Titolo:"Titolo 1", Autore:"Autore 1", NumeroCopie:3},
    {Codice:"KDJSN90", Titolo:"Titolo 2", Autore:"Autore 2", NumeroCopie:5},
    {Codice:"JFJSN76", Titolo:"Titolo 3", Autore:"Autore 3", NumeroCopie:7}

  ]
constructor() { }
restituisceListaLibri(){
  return this.libri;
}

// aggiungiLibro(string:Codice, string:titolo, string:Autore, numeroCopie){
//   this.libri.push({Codice:Codice, Titolo:titolo, Autore:Autore, NumeroCopie:numeroCopie},);
// }


// rimuoviLibro(Codice){

//   Object.entries(this.libri).forEach(

//       ([key, value]) => {
//                          // console.log(value.Email)
//                           if(value.Codice==Codice){
//                                                     delete this.libri[key];
//                           }
//       }
//   );


// }


}
