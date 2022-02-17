import { FormMouseComponent } from './form-mouse/form-mouse.component';
import { MousesComponent } from './mouses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MousesComponent },
  { path: 'form-mouse', component: FormMouseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MousesRoutingModule { }
