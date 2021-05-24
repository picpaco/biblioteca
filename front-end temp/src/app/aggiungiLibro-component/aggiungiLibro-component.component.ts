import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InserisciLibroServiceService } from '../ServiziAngular/aggiungiLibroService/inserisciLibroService.service';

@Component({
  selector: 'app-aggiungiLibro-component',
  templateUrl: './aggiungiLibro-component.component.html',
  styleUrls: ['./aggiungiLibro-component.component.css']
})
export class AggiungiLibroComponentComponent implements OnInit {

  constructor(private ServizioAggiungiLibro:InserisciLibroServiceService, ) { }

  ngOnInit() {
  }
codice2:string='';
titolo2:string='';
autore2:string='';

loginform= new FormGroup({
  codice: new FormControl('', [Validators.required]),
  titolo: new FormControl('', [Validators.required]),
  autore: new FormControl('', [Validators.required]),
})

get codice(){return this.loginform.get('codice')}
get titolo(){return this.loginform.get('titolo')}
get autore(){return this.loginform.get('autore')}
public aggiungiLibro(){

  this.ServizioAggiungiLibro.aggiungiLibro(this.codice2, this.titolo2, this.autore2, 1);
}
}
