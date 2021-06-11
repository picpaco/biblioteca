import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//import { AuthService } from '../auth.service';
import { RegistrazioneService } from '../registrazioneService/registrazione.service';

@Injectable({
  providedIn: 'root'
})
export class ControlloLoginService implements CanActivate{

constructor(private authService: RegistrazioneService, private route: Router) { }


canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {

if(!this.authService.restituisceBooleanoSeUtenteEloggato()){
  this.route.navigate(['login3']);
  return false;
}else{
  return true;
}
  // return this.authService.restituisceBooleanoSeUtenteEloggato();
  }

}
