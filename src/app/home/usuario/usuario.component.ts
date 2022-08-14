import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {
  usuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.iniciaFormulario();
  }

  iniciaFormulario(){
    this.usuarioForm = this.formBuilder.group({
      nomeCompleto: ['', [Validators.required ]],
      dataNascimento: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email ]],
    });
  }

  cadastrar() {
    if(this.usuarioForm.valid){
      const usuario = this.usuarioForm.getRawValue() as Usuario;
      alert('Cadastro efetuado com sucesso');
      this.iniciaFormulario();
      this.router.navigate(['']);
    } else {
      alert('Cadastro inválido');
    }
  }
}
