import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MousesRoutingModule } from './mouses-routing.module';
import { MousesComponent } from './mouses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormMouseComponent } from './form-mouse/form-mouse.component';


@NgModule({
  declarations: [
    MousesComponent,
    FormMouseComponent
  ],
  imports: [
    CommonModule,
    MousesRoutingModule,
    SharedModule,
  ],
  exports: [MousesComponent]
})
export class MousesModule { }
