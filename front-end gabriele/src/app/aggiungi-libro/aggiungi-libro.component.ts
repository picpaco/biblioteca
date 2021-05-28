import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BibliotecaService } from '../_servizi/biblioteca.service';

@Component({
  selector: 'app-aggiungi-libro',
  templateUrl: './aggiungi-libro.component.html',
  styleUrls: ['./aggiungi-libro.component.css']
})
export class AggiungiLibroComponent implements OnInit {

  form: any = {
    codice: null,
    titolo: null,
    autore: null
  }
  libroAggiunto = false;
  errorMessage = '';

  constructor(private bibliotecaService: BibliotecaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { codice, titolo, autore} = this.form;

    this.bibliotecaService.aggiungiLibro(codice, titolo, autore).subscribe(
      data => {
        this.libroAggiunto = true;
        console.log(data);
        this.router.navigate(["/libri"]);
      },
      err => {
        this.errorMessage = err.error.message;
        this.libroAggiunto = false;
      } 
    )
  }

}
