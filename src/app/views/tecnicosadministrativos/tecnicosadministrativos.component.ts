import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';
import { OpendialogService } from 'src/app/shared/service/opendialog.service';
import { TecnicoAdministrativo } from './tecnicosadministrativos';
import { TecnicosAdministrativosService } from './tecnicosadministrativos.service';

@Component({
  selector: 'app-tecnicosadministrativos',
  templateUrl: './tecnicosadministrativos.component.html',
  styleUrls: ['./tecnicosadministrativos.component.css']
})
export class TecnicosAdministrativosComponent implements OnInit {

  dataSource: MatTableDataSource<TecnicoAdministrativo>;
  displayedColumns: string[] = ["nome", "unidade", "telefone", "acoes"];
  servicoModel: TecnicosAdministrativosService;

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
    private service: TecnicosAdministrativosService,
    private router: Router,
    public dataService: DataService,
    private opendialogService: OpendialogService
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  openDialog(tecnicoadministrativo: TecnicoAdministrativo): void {
    this.opendialogService.openDialog(tecnicoadministrativo, "tecnicosadministrativos");
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(resposta);
    });
  }

  irParaForm() {
    this.router.navigate(["form-tecnicoadministrativo"]);
  }

  verMais(id: number) {
    this.router.navigate(["ver-tecnicoadministrativo/" + id]);
  }

}
