import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../_servizi/biblioteca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rimuovi-libro',
  templateUrl: './rimuovi-libro.component.html',
  styleUrls: ['./rimuovi-libro.component.css']
})
export class RimuoviLibroComponent implements OnInit {

  form: any = {
    codice: null 
  };
  
  rimossoConSuccesso = false;
  errorMessage = '';

  constructor(private biblioService: BibliotecaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    const codice: any = this.form;
    this.biblioService.rimuoviLibro(codice).subscribe(
      data => {
        console.log(data);
        this.rimossoConSuccesso = true;
        this.router.navigate(["/libri"]);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    )
  }

}
