import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';


@NgModule({
  declarations: [HomeComponent, LoginComponent, UsuarioComponent, RecuperarSenhaComponent,  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
