import { MatInputModule } from '@angular/material/input';
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
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


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
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,    
    MatSelectModule,
    MatFormFieldModule,
    MatDividerModule, 
    DelDialogComponent, 
    HistoricoComponent
  ],
  providers:[DataService]
})
export class SharedModule { }
