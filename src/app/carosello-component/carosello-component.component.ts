import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../ServiziAngular/loginService/loginService.service';

@Component({
  selector: 'app-carosello-component',
  templateUrl: './carosello-component.component.html',
  styleUrls: ['./carosello-component.component.css']
})




export class CaroselloComponentComponent implements OnInit {

  constructor(private ServizioLogin:LoginServiceService) { }

  ngOnInit() {
  }

}
