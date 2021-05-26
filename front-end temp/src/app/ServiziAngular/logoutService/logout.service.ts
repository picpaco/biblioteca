import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

constructor() { }

effettuaLogout(){
  sessionStorage.clear();
}
}
