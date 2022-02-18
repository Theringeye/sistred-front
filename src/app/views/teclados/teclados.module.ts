import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecladosRoutingModule } from './teclados-routing.module';
import { TecladosComponent } from './teclados.component';
import { FormTecladoComponent } from './form-teclado/form-teclado.component';
import { DelTecladoComponent } from './del-teclado/del-teclado.component';
import { VerTecladoComponent } from './ver-teclado/ver-teclado.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TecladosService } from './teclados.service';


@NgModule({
  declarations: [
    TecladosComponent,
    FormTecladoComponent,
    VerTecladoComponent,
    DelTecladoComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    TecladosRoutingModule
  ],
  exports: [],
  providers: [DelTecladoComponent]
})
export class TecladosModule { }
