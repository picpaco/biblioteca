import { Component, OnInit } from '@angular/core';
import { AutorizzazioneService } from '../_servizi/autorizzazione.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  form: any = {
    nome: null,
    cognome: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AutorizzazioneService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { nome, cognome, email, password } = this.form;

    this.authService.register(nome, cognome, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
