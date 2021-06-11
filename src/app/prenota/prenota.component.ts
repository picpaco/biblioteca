import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrenotaService } from '../ServiziAngular/servizioPrenotaCopia/prenota.service';

@Component({
  selector: 'app-prenota',
  templateUrl: './prenota.component.html',
  styleUrls: ['./prenota.component.css']
})
export class PrenotaComponent implements OnInit {
  valoreCodiceCopia;

  constructor(private ServizioPrenota:PrenotaService) { }

  loginform= new FormGroup({
    codice: new FormControl('', [Validators.required]),

  })
  get codice(){return this.loginform.get('')}
  codice2='';
  ngOnInit() {
  console.log(sessionStorage.getItem("libro.codice"));
  this.valoreCodiceCopia=sessionStorage.getItem("libro.codice");

  }
  message:any;
  prenotaCopia(){
    console.log("PRENOTACOPIA "+this.valoreCodiceCopia+this.codice2);
    this.ServizioPrenota.prestito(this.valoreCodiceCopia, this.valoreCodiceCopia+this.codice2).subscribe(
      data=>{
        this.loginform=data;
      },
      err => {
        this.loginform = JSON.parse(err.error).message;
      }
    )
  }

}
