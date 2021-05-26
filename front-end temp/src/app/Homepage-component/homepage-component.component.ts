import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { TokenStorageService } from '../ServiziAngular/token-storage.service';
import { UserService } from '../ServiziAngular/user.service';
@Component({
  selector: 'app-homepage-component',
  templateUrl: './homepage-component.component.html',
  styleUrls: ['./homepage-component.component.css']
})
export class HomepageComponentComponent implements OnInit {

  content?: string;
//ciao
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  /*isUtenteConnesso = false;
  roles: string [] = [];
  showAdminBoard = false;
  showUserBoard = false;
  username?: string

  constructor(private router: Router, private TokenStorageService: TokenStorageService) { }


  ngOnInit() {
    //window.location.reload();
    this.isUtenteConnesso = !!this.TokenStorageService.getToken();

      if(this.isUtenteConnesso){
        const user = this.TokenStorageService.getUser();
        this.roles = user.roles;

        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showUserBoard = this.roles.includes('ROLE_USER');

        this.username = user.username;
    console.log("UTENTE "+this.isUtenteConnesso+" homeComponent");
  }


}*/
}
