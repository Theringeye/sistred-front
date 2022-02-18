import { VerMouseComponent } from './ver-mouse/ver-mouse.component';
import { FormMouseComponent } from './form-mouse/form-mouse.component';
import { MousesComponent } from './mouses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelMouseComponent } from './del-mouse/del-mouse.component';

const routes: Routes = [
  { path: '', component: MousesComponent },
  { path: 'form-mouse', component: FormMouseComponent},
  { path: 'ver-mouse/:mouseId', component: VerMouseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MousesRoutingModule { }
