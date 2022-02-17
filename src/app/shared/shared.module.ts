import { MatPaginatorModule } from '@angular/material/paginator';
import { DataService } from './service/data.service';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelDialogComponent } from './components/del-dialog/del-dialog.component';
import { HistoricoComponent } from './components/historico/historico.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    DelDialogComponent,
    HistoricoComponent,
    
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
  ],
  exports:[
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatDividerModule, 
    DelDialogComponent, 
    HistoricoComponent
  ],
  providers:[DataService]
})
export class SharedModule { }
