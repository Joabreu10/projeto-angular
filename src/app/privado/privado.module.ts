import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivadoRoutingModule } from './privado-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { HistoricoComponent } from './historico/historico.component';
import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [InicioComponent, OrcamentoComponent, EstoqueComponent, HistoricoComponent, MenuComponent],
  imports: [
    CommonModule,
    PrivadoRoutingModule,
  ],
  exports: [MenuComponent]
})
export class PrivadoModule { }
