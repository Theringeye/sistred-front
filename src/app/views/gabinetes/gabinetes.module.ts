import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GabinetesRoutingModule } from './gabinetes-routing.module';
import { GabinetesComponent } from './gabinetes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VerGabineteComponent } from './ver-gabinete/ver-gabinete.component';
import { DelGabineteComponent } from './del-gabinete/del-gabinete.component';
import { FormGabineteComponent } from './form-gabinete/form-gabinete.component';


@NgModule({
  declarations: [
    GabinetesComponent,
    VerGabineteComponent,
    DelGabineteComponent,
    FormGabineteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GabinetesRoutingModule
  ],
  exports: [DelGabineteComponent],
  providers: [DelGabineteComponent]
})
export class GabinetesModule { }
