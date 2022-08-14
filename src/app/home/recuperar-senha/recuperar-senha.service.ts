import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecuperarSenhaService {

  constructor() { }

  recuperarSenha(email: string): boolean {
    if(email == 'admin@gmail.com') {
      return true;
    } else {
      return false;
    }
  }
}
