import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormAtivosComponent } from './views/forms/form-ativos/form-ativos.component';
import { PainelComponent } from './views/painel/painel.component';

const routes: Routes = [
  {
    path: 'Painel',
    component: PainelComponent
  },
  {
    path: 'Ativos',
    component: FormAtivosComponent
  },
  {
    path: 'Movimentacoes',
    component: FormAtivosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
