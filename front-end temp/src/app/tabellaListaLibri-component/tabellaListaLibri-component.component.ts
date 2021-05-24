import { Component, OnInit } from '@angular/core';
import { InserisciLibroServiceService } from '../ServiziAngular/aggiungiLibroService/inserisciLibroService.service';

@Component({
  selector: 'app-tabellaListaLibri-component',
  templateUrl: './tabellaListaLibri-component.component.html',
  styleUrls: ['./tabellaListaLibri-component.component.css']
})
export class TabellaListaLibriComponentComponent implements OnInit {




  constructor(private InserisciLibroServizio:InserisciLibroServiceService) { }

  ngOnInit() {

  }







libri=this.InserisciLibroServizio.restituisceListaLibri();


}
