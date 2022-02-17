import { MousesComponent } from './../../../views/mouses/mouses.component';

import {
  Component,
  OnInit,
} from "@angular/core";
import { Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { DelCaboComponent } from "src/app/views/cabos/del-cabo/del-cabo.component";
import { DelTecladoComponent } from 'src/app/views/teclados/del-teclado/del-teclado.component';

@Component({
  providers: [DelCaboComponent, DelTecladoComponent],
  selector: "app-form-dialog",
  templateUrl: "./del-dialog.component.html",
  styleUrls: ["./del-dialog.component.css"],
})
export class DelDialogComponent implements OnInit {
  //o parametro injetado pega os dados provenientes do MAT_DIALGO_DATA, que está vindo da classe
  //responsavel por acionar o componente dialogo
  constructor(
    public dialogRef: MatDialogRef<DelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router,
    private caboComponente: DelCaboComponent,
    private tecladoComponente: DelTecladoComponent,
  ) {}

  sim(): void {
    if (this.data.nomeComponente == "cabos") {
      this.caboComponente.remover(this.data.ativo);     
    } else if (this.data.nomeComponente == "teclados") {
      this.tecladoComponente.remover(this.data.ativo); 
    } else if (this.data.nomeComponente == "monitor") {
    } else if (this.data.nomeComponente == "mouses"){
     
    }
    this.recarregaComponente();
    this.dialogRef.close();
  }

  nao() {
    this.dialogRef.close();
  }

  recarregaComponente() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate([this.data.nomeComponente]);
  }

  ngOnInit(): void {}
}
