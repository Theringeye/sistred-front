import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtivosComponent } from './views/ativos/ativos.component';
import { CabosComponent } from './views/cabos/cabos.component';
import { FormAtivosComponent } from './views/forms/form-ativos/form-ativos.component';
import { FormCabosComponent } from './views/forms/form-cabos/form-cabos.component';
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
  },
  {
    path: 'cabos',
    component: CabosComponent
  },
  {
    path: 'form-cabos',
    component: FormCabosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
