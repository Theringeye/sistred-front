import { Router } from "@angular/router";
import { DataService } from "./../../service/data.service";
import { Historico } from "src/app/shared/model/historico";
import { Component, Input, OnInit, Output } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatTableModule } from "@angular/material/table";
import { Cabo } from "src/app/views/cabos/cabo";

@Component({
  selector: "app-historico",
  templateUrl: "./historico.component.html",
  styleUrls: ["./historico.component.css"],
})
export class HistoricoComponent implements OnInit {
  @Input() dataSource: MatTableDataSource<Historico>;
  displayedColumns: string[] = ["Situacao", "Data"];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(
      this.dataService.getDataAtivo().listaHistoricoAtivoDTO
    );
  }

  voltar() {
    this.router.navigate([this.dataService.getDataSeletorComponente()]);
  }

  adicionar() {}
}
