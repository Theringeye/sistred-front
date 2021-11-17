import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtivosComponent } from './views/ativos/ativos.component';
import { FormAtivosComponent } from './views/forms/form-ativos/form-ativos.component';
import { MovimentacoesComponent } from './views/movimentacoes/movimentacoes.component';
import { PainelComponent } from './views/painel/painel.component';

const routes: Routes = [
  {
    path: '',
    component: PainelComponent
  },
  {
    path: 'painel',
    component: PainelComponent
  },
  {
    path: 'ativos',
    component: AtivosComponent
  },
  {
    path: 'form-ativos',
    component: FormAtivosComponent
  },
  {
    path: 'form-movimentacoes',
    component: FormAtivosComponent
  },
  {
    path: 'movimentacoes',
    component: MovimentacoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
