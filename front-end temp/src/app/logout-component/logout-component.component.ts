import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../ServiziAngular/logoutService/logout.service';
import { TokenStorageService } from '../ServiziAngular/token-storage.service';

@Component({
  selector: 'app-logout-component',
  templateUrl: './logout-component.component.html',
  styleUrls: ['./logout-component.component.css']
})
export class LogoutComponentComponent implements OnInit {

  constructor(private ServizioLogout: LogoutService/*, private token: TokenStorageService*/) { }

  ngOnInit() {

    this.ServizioLogout.effettuaLogout();
    //this.token.signOut();
  }



}
