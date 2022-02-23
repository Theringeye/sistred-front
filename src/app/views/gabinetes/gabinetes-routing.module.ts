import { VerGabineteComponent } from './ver-gabinete/ver-gabinete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GabinetesComponent } from './gabinetes.component';
import { FormGabineteComponent } from './form-gabinete/form-gabinete.component';

const routes: Routes = [

  { path: "", component: GabinetesComponent },
  { path: "form-gabinete", component: FormGabineteComponent },
  { path: "ver-gabinete/:idGabinete", component: VerGabineteComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GabinetesRoutingModule { }
