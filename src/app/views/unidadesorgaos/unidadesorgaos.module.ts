import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadesOrgaosRoutingModule } from './unidadesorgaos-routing.module';
import { UnidadesOrgaosComponent } from './unidadesorgaos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormUnidadeorgaoComponent } from './form-unidadeorgao/form-unidadeorgao.component';
import { VerUnidadeorgaoComponent } from './ver-unidadeorgao/ver-unidadeorgao.component';
import { DelUnidadeorgaoComponent } from './del-unidadeorgao/del-unidadeorgao.component';


@NgModule({
  declarations: [
    UnidadesOrgaosComponent,
    FormUnidadeorgaoComponent,
    VerUnidadeorgaoComponent,
    DelUnidadeorgaoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UnidadesOrgaosRoutingModule
  ],
  exports: [DelUnidadeorgaoComponent],
  providers: [DelUnidadeorgaoComponent]
})
export class UnidadesOrgaosModule { }
