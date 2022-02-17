import { VerTecladoComponent } from './ver-teclado/ver-teclado.component';
import { DelTecladoComponent } from 'src/app/views/teclados/del-teclado/del-teclado.component';
import { FormTecladoComponent } from './form-teclado/form-teclado.component';
import { TecladosComponent } from './teclados.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TecladosComponent
  },
  {
    path: 'form-teclado',
    component: FormTecladoComponent
  },
  {
    path: 'del-teclado/:id',
    component: DelTecladoComponent
  },
  {
    path: 'ver-teclado/:id',
    component: VerTecladoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecladosRoutingModule { }
