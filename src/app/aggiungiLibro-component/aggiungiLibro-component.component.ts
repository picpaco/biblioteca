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
numerocopie2;

loginform= new FormGroup({
  codice: new FormControl('', [Validators.required]),
  titolo: new FormControl('', [Validators.required]),
  autore: new FormControl('', [Validators.required]),
  numeroCopie: new FormControl('', [Validators.required]),
})

form: any = {
  codice: null,
  titolo: null,
  autore: null,
  numeroCopie:null
};

message:any;
get codice(){return this.loginform.get('codice')}
get titolo(){return this.loginform.get('titolo')}
get autore(){return this.loginform.get('autore')}
get numerocopie(){return this.loginform.get('numerCopie')}

public aggiungiLibro(){
this.ServizioAggiungiLibro.aggiungiLibro(this.codice2, this.titolo2, this.autore2, this.numerocopie2 ).subscribe(
  data=>{
    this.loginform=data;
  },
  err => {
    this.loginform = JSON.parse(err.error).message;
  }
 );



/*
 const { codice, titolo, autore } = this.form;

 this.ServizioAggiungiLibro.aggiungiLibro(codice, titolo, autore).subscribe(
   data => {
     console.log(data);

   },
   err => {


   }
 );
*/
}

}
