import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './ServiziAngular/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isUtenteConnesso = false;
  showAdminBoard = false;
  showUserBoard = false;
  username?: string

  constructor(private TokenStorageService: TokenStorageService){}
  ngOnInit(): void{
      this.isUtenteConnesso = !!this.TokenStorageService.getToken();

      if(this.isUtenteConnesso){
        const user = this.TokenStorageService.getUser();
        this.roles = user.roles;

        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showUserBoard = this.roles.includes('ROLE_USER');

        this.username = user.username;
      }
    }

    logout(): void{
      this.TokenStorageService.signOut();
      window.location.reload();
    }
  }
