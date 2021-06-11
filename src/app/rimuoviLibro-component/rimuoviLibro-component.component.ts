import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InserisciLibroServiceService } from '../ServiziAngular/aggiungiLibroService/inserisciLibroService.service';
import { EliminaCopiaService } from '../ServiziAngular/eliminaService/eliminaCopia.service';

@Component({
  selector: 'app-rimuoviLibro-component',
  templateUrl: './rimuoviLibro-component.component.html',
  styleUrls: ['./rimuoviLibro-component.component.css']
})
export class RimuoviLibroComponentComponent implements OnInit {

  ngOnInit() {
  }
  codice2:string ="";
  constructor(private ServizioElimina:EliminaCopiaService) { }

//libri=this.ServizioElimina.getLibri();


loginform= new FormGroup({
  codice: new FormControl('', [Validators.required]),

})
get codice(){return this.loginform.get('codice')}

rimuoviLibro(){
this.ServizioElimina.eliminaCopia(this.codice2).subscribe(
  data=>{
    this.loginform=data;
  },
  err => {
    this.loginform = JSON.parse(err.error).message;
  }
)
}




}
