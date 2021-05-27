import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../_servizi/utente.service';

@Component({
  selector: 'app-board-amministratore',
  templateUrl: './board-amministratore.component.html',
  styleUrls: ['./board-amministratore.component.css']
})
export class BoardAmministratoreComponent implements OnInit {
  
  content?: any[];

  constructor(private userService: UtenteService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content= Array.of(data);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
