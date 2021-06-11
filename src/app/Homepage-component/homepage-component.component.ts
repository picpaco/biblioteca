import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-homepage-component',
  templateUrl: './homepage-component.component.html',
  styleUrls: ['./homepage-component.component.css']
})
export class HomepageComponentComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {

  }

}
