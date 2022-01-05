import { DataService } from "./../../shared/service/data.service";
import { DelDialogComponent } from "../../shared/components/del-dialog/del-dialog.component";
import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Cabo } from "./cabo";
import { CabosService } from "./cabos.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog} from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";


@Component({
  selector: "app-cabos",
  templateUrl: "./cabos.component.html",
  styleUrls: ["./cabos.component.css"],
})
export class CabosComponent implements OnInit {
  dataSource: MatTableDataSource<Cabo>;
  displayedColumns: string[] = ["tipo", "fabricante", "acoes"];
  servicoModel: CabosService;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtro(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor(
    private service: CabosService,
    private router: Router,
    public dialog: MatDialog,
    public dataService: DataService
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  openDialog(cabo: Cabo): void {
    //a parametro data informa o nome do componente(o que possui o metodo de remover item da lista)
    //e o id do objeto e o servico.
    //O nome do componente deve ser o mesmo que esta configurado nas rotas
    const dialogRef = this.dialog.open(DelDialogComponent, {
      width: "250px",
      data: {
        nomeComponente: "cabos",
        ativo: cabo,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(resposta);
    });
  }

  irParaFormCabo() {
    this.router.navigate(["form-cabo"]);
  }

  verMais(id: number) {
    this.router.navigate(["ver-cabo/" + id]);
  }

  verHistorico(cabo: Cabo) {
    this.router.navigate(["historico-cabo"]);
    this.goToCaboByServiço(cabo);
  }

  goToCaboByServiço(cabo: Cabo) {
    this.dataService.setDataAtivo(cabo);
    this.dataService.setDataSeletorComponente("cabos");
  }
}
