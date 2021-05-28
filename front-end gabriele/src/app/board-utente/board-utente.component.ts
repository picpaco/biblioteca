import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../_servizi/biblioteca.service';

@Component({
  selector: 'app-board-utente',
  templateUrl: './board-utente.component.html',
  styleUrls: ['./board-utente.component.css']
})
export class BoardUtenteComponent implements OnInit {

  //content?: string;
  content: any;

  constructor(private bibliotecaService: BibliotecaService) { }

  ngOnInit(): void {
    this.bibliotecaService.getListaLibri().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
