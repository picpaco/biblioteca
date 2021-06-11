import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InserisciLibroServiceService } from '../ServiziAngular/aggiungiLibroService/inserisciLibroService.service';

@Component({
  selector: 'app-tabellaListaLibri-component',
  templateUrl: './tabellaListaLibri-component.component.html',
  styleUrls: ['./tabellaListaLibri-component.component.css']
})
export class TabellaListaLibriComponentComponent implements OnInit {
  loginform= new FormGroup({
    codice: new FormControl('', [Validators.required]),


  })
  get codiceCopia(){return this.loginform.get('codiceCopia')}
  get codice(){return this.loginform.get('libro.codice')}
  libri:any;
  //content: any;

  constructor(private InserisciLibroServizio:InserisciLibroServiceService) { }

  ngOnInit() {
    //let resp=this.InserisciLibroServizio.getLibri();
    //resp.subscribe((data)=>this.libri=data);
    this.InserisciLibroServizio.getLibri().subscribe(
      data => {
        this.libri= data;
      },
      err => {
        this.libri = JSON.parse(err.error).message;
      }
    );
  }

prenotazione(codiceCopia: string){
  const{codice} = this.loginform.value;
  console.log(codiceCopia);
  sessionStorage.setItem("libro.codice", codiceCopia);
}





//libri=this.InserisciLibroServizio.restituisceListaLibri();


}
