import { RecuperarSenhaService } from './recuperar-senha.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
})
export class RecuperarSenhaComponent implements OnInit {
  recuperarSenhaForm!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private recuperarSenhaService: RecuperarSenhaService
  ) {}

  ngOnInit(): void {
    this.iniciaFormulario();
  }

  iniciaFormulario(){
    this.recuperarSenhaForm = this.formBuilder.group({
      email: ['', [Validators.required ]],
    });
  }

  recuperar(){
    if(this.recuperarSenhaForm.valid){
      let sucesso = this.recuperarSenhaService.recuperarSenha(this.recuperarSenhaForm.value);
      if (sucesso) {
        alert('Senha provisória enviada para o email.');
      } else {
        alert('Email não encontrado');
      }
      this.iniciaFormulario();
    } else {
      alert('Email obrigatório');
    }
  }

}
