import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../ServiziAngular/logoutService/logout.service';

@Component({
  selector: 'app-logout-component',
  templateUrl: './logout-component.component.html',
  styleUrls: ['./logout-component.component.css']
})
export class LogoutComponentComponent implements OnInit {

  constructor(private ServizioLogout: LogoutService) { }

  ngOnInit() {
    this.ServizioLogout.effettuaLogout();
  }

}
