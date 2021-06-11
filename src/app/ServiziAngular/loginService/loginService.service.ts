import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Utenti } from 'src/app/utenti';


@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

constructor(private http:HttpClient) {


 }

verificaSeVuoti(Email: string,password: string){
  if (Email === '' && password === ''){
    return true;
  }else{
    return false;
  }
}

}
