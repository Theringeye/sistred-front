import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DelDialogComponent } from '../components/del-dialog/del-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class OpendialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(ativo: any, compoente: string): void {
    const dialogRef = this.dialog.open(DelDialogComponent, {
      width: "250px",
      data: {
        nomeComponente: compoente,
        ativo: ativo,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("A caixa de confirmação fechou.");
    });
  }
}
