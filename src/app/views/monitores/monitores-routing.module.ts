import { MonitoresComponent } from './monitores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMonitorComponent } from './form-monitor/form-monitor.component';
import { VerMonitorComponent } from './ver-monitor/ver-monitor.component';

const routes: Routes = [
  { path: "", component: MonitoresComponent },
  { path: "form-monitor", component: FormMonitorComponent },
  { path: "ver-monitor/:idMonitor", component: VerMonitorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitoresRoutingModule { }
