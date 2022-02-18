import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MousesRoutingModule } from './mouses-routing.module';
import { MousesComponent } from './mouses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormMouseComponent } from './form-mouse/form-mouse.component';
import { DelMouseComponent } from './del-mouse/del-mouse.component';
import { MousesService } from './mouses.service';
import { VerMouseComponent } from './ver-mouse/ver-mouse.component';


@NgModule({
  declarations: [
    MousesComponent,
    FormMouseComponent,
    DelMouseComponent,
    VerMouseComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MousesRoutingModule,    
  ],
  exports: [],
  providers: [DelMouseComponent]
})
export class MousesModule { }
