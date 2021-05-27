import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutorizzazioneService } from '../_servizi/autorizzazione.service';
import { TokenStorageService } from '../_servizi/token-storage.service';

@Component({
  selector: 'app-accesso',
  templateUrl: './accesso.component.html',
  styleUrls: ['./accesso.component.css']
})
export class AccessoComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AutorizzazioneService, 
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    //window.location.reload();
    this.router.navigate(["/pagina-principale"]);
  }

}
