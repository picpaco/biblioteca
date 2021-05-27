import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../_servizi/utente.service';

@Component({
  selector: 'app-board-utente',
  templateUrl: './board-utente.component.html',
  styleUrls: ['./board-utente.component.css']
})
export class BoardUtenteComponent implements OnInit {

  content?: string;

  constructor(private userService: UtenteService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
