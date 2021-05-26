import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InserisciLibroServiceService } from '../ServiziAngular/aggiungiLibroService/inserisciLibroService.service';

@Component({
  selector: 'app-rimuoviLibro-component',
  templateUrl: './rimuoviLibro-component.component.html',
  styleUrls: ['./rimuoviLibro-component.component.css']
})
export class RimuoviLibroComponentComponent implements OnInit {

  ngOnInit() {
  }
  codice2 ="";
  constructor(private ServizioElimina:InserisciLibroServiceService) { }

libri=this.ServizioElimina.restituisceListaLibri();
loginform= new FormGroup({
  codice: new FormControl('', [Validators.required]),

})
get codice(){return this.loginform.get('codice')}

rimuoviLibro(){
//this.ServizioElimina.rimuoviLibro(this.codice2);
}




}
