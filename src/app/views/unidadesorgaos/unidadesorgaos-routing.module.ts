import { UnidadesOrgaosComponent } from './unidadesorgaos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUnidadeorgaoComponent } from './form-unidadeorgao/form-unidadeorgao.component';
import { VerUnidadeorgaoComponent } from './ver-unidadeorgao/ver-unidadeorgao.component';

const routes: Routes = [

  { path: "", component: UnidadesOrgaosComponent},
  { path: "form-unidadeorgao", component: FormUnidadeorgaoComponent},
  { path: "ver-unidadeorgao/:idUO", component: VerUnidadeorgaoComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadesOrgaosRoutingModule { }
