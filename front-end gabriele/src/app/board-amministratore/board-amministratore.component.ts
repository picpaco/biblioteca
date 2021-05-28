import { Component, OnInit } from '@angular/core';
import { Utente } from '../utente';
import { UtenteService } from '../_servizi/utente.service';

@Component({
  selector: 'app-board-amministratore',
  templateUrl: './board-amministratore.component.html',
  styleUrls: ['./board-amministratore.component.css']
})
export class BoardAmministratoreComponent implements OnInit {
  
  //content?: Set<Utente>;
  content: any;

  constructor(private userService: UtenteService) { }

  ngOnInit(): void {
    this.userService.getListaUtenti()
    .subscribe(
      data => {
        //this.content= Array.of(data);
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
