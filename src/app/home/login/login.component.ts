import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.required ]],
      senha: ['', [Validators.required ]],
    });
  }

  realizarLogin() {
    if(this.loginForm.valid){
      let sucesso = this.autenticacaoService.autenticar(this.loginForm.value);
      if (sucesso) {
        alert('Login efetuado com sucesso')
        this.router.navigate(['privado']);
      } else {
        alert('Email ou senha inválido');
      }
    } else {
      alert('Email e senha obrigatório');
    }

  }
}
