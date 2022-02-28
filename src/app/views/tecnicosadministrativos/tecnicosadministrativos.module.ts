import { TecnicosAdministrativosComponent } from './tecnicosadministrativos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicosAdministrativosRoutingModule } from './tecnicosadministrativos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TecnicosAdministrativosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TecnicosAdministrativosRoutingModule
  ]
})
export class TecnicosAdministrativosModule { }
