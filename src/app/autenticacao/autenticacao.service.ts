import { Login } from './../home/login/login';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {

  constructor() { }

  autenticar(login: Login): boolean {
    if(login.email == 'admin@gmail.com'  && login.senha == 'admin1' ) {
      return true;
    } else {
      return false;
    }
  }

}
