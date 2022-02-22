import { MonitoresComponent } from './monitores.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoresRoutingModule } from './monitores-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormMonitorComponent } from './form-monitor/form-monitor.component';
import { VerMonitorComponent } from './ver-monitor/ver-monitor.component';
import { DelMonitorComponent } from './del-monitor/del-monitor.component';


@NgModule({
  declarations: [
    MonitoresComponent,
    FormMonitorComponent,
    VerMonitorComponent,
    DelMonitorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MonitoresRoutingModule,    
  ],
  providers: [DelMonitorComponent]
})
export class MonitoresModule { }
