import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cabo } from "./cabo";
import { CabosService } from "./cabos.service";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-cabos",
  templateUrl: "./cabos.component.html",
  styleUrls: ["./cabos.component.css"],
})
export class CabosComponent implements OnInit {
  dataSource: MatTableDataSource<Cabo>;
  displayedColumns: string[] = ["tipo", "fabricante", "mais"];

  filtro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private service: CabosService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.dataSource = new MatTableDataSource(resposta);
      console.log(resposta);
    });
  }

  irParaFormCabo() {
    this.router.navigate(["form-cabo"]);
  }

  verMais(id: number) {
    this.router.navigate(["ver-cabo/" + id]);
  }
}
