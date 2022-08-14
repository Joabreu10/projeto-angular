import { HistoricoComponent } from './historico/historico.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path:'orcamento',
    component: OrcamentoComponent,
  },
  {
    path:'estoque',
    component: EstoqueComponent,
  },
  {
    path:'historico',
    component: HistoricoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivadoRoutingModule {}
