import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';
import { OpendialogService } from 'src/app/shared/service/opendialog.service';
import { UnidadeOrgao } from './unidadeorgao';
import { UnidadesOrgaosService } from './unidadesorgaos.service';

@Component({
  selector: 'app-unidadesorgaos',
  templateUrl: './unidadesorgaos.component.html',
  styleUrls: ['./unidadesorgaos.component.css']
})
export class UnidadesOrgaosComponent implements OnInit {

  dataSource: MatTableDataSource<UnidadeOrgao>;
  displayedColumns: string[] = ["nomeUnidade", "siglaUnidade", "telefoneRamal", "acoes"];
  servicoModel: UnidadesOrgaosService;

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
    private service: UnidadesOrgaosService,
    private router: Router,
    public dataService: DataService,
    private opendialogService: OpendialogService
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  openDialog(unidadeorgao: UnidadeOrgao): void {
    this.opendialogService.openDialog(unidadeorgao, "unidadesorgaos");
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(resposta);
    });
  }

  irParaFormUnidadeOrgao() {
    this.router.navigate(["form-unidadeorgao"]);
  }

  verMais(id: number) {
    this.router.navigate(["ver-unidadeorgao/" + id]);
  }

}
