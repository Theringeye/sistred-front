import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicosAdministrativosComponent } from './tecnicosadministrativos.component';

const routes: Routes = [

  { path: "", component: TecnicosAdministrativosComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnicosAdministrativosRoutingModule { }
