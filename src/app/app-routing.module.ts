import { HistoricoCaboComponent } from './views/cabos/historico-cabo/historico-cabo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtivosComponent } from './views/ativos/ativos.component';
import { CabosComponent } from './views/cabos/cabos.component';
import { DelCaboComponent } from './views/cabos/del-cabo/del-cabo.component';
import { FormCabosComponent } from './views/cabos/form-cabos/form-cabos.component';
import { VerCaboComponent } from './views/cabos/ver-cabo/ver-cabo.component';
import { FormAtivosComponent } from './views/forms/form-ativos/form-ativos.component';
import { MovimentacoesComponent } from './views/movimentacoes/movimentacoes.component';
import { PainelComponent } from './views/painel/painel.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'painel' },
  { path: 'painel', component: PainelComponent },
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
    path: 'form-cabo',
    component: FormCabosComponent
  },
  {
    path: 'historico-cabo',
    component: HistoricoCaboComponent
  },
  {
    path: 'ver-cabo/:id',
    component: VerCaboComponent
  },
  {
    path: 'del-cabo/:id',
    component: DelCaboComponent
  }, 
  {
    path: 'mouses',
    loadChildren: () => import('./views/mouses/mouses.module').then((m) => m.MousesModule)
  },
  {
    path: 'teclados',
    loadChildren: () => import('./views/teclados/teclados.module').then((m) => m.TecladosModule)
  },
  {
    path: 'monitores',
    loadChildren: () => import('./views/monitores/monitores.module').then((m) => m.MonitoresModule)
  },
  {
    path: 'gabinetes',
    loadChildren: () => import('./views/gabinetes/gabinetes.module').then((m) => m.GabinetesModule)
  },
  {
    path: 'unidadesorgaos',
    loadChildren: () => import('./views/unidadesorgaos/unidadesorgaos.module').then((m) => m.UnidadesOrgaosModule)
  },
  {
    path: 'tecnicosadministrativos',
    loadChildren: () => import('./views/tecnicosadministrativos/tecnicosadministrativos.module').then((m) => m.TecnicosAdministrativosModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
