import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../_servizi/utente.service';

@Component({
  selector: 'app-pagina-principale',
  templateUrl: './pagina-principale.component.html',
  styleUrls: ['./pagina-principale.component.css']
})
export class PaginaPrincipaleComponent implements OnInit {

  content?: string;

  constructor(private userService: UtenteService) { }

  ngOnInit(): void {
    /*
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    */
    if( window.localStorage )
      {
        if( !localStorage.getItem('firstLoad') )
        {
          localStorage['firstLoad'] = true;
          window.location.reload();
        }
        else
          localStorage.removeItem('firstLoad');
      }

 
   }

}
