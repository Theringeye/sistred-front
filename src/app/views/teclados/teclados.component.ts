import { OpendialogService } from './../../shared/service/opendialog.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';
import { Teclado } from './teclado';
import { TecladosService } from './teclados.service';

@Component({
  selector: 'app-teclados',
  templateUrl: './teclados.component.html',
  styleUrls: ['./teclados.component.css']
})
export class TecladosComponent implements OnInit {

  dataSource: MatTableDataSource<Teclado>;
  displayedColumns: string[] = ["patrimonio", "modelo", "fabricante", "padrao", "acoes"];
  servicoModel: TecladosService;

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
    private service: TecladosService,
    private router: Router,
    public dataService: DataService,
    private opendialogService: OpendialogService
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  openDialog(teclado: Teclado): void {
    this.opendialogService.openDialog(teclado, "teclados");
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(resposta);
    });
  }

  irParaFormTeclado() {
    this.router.navigate(["form-teclado"]);
  }

  verMais(id: number) {
    this.router.navigate(["ver-teclado/" + id]);
  }

  verHistorico(teclado: Teclado) {
    this.router.navigate(["historico-teclado"]);
    this.goToTecladoByServiço(teclado);
  }

  goToTecladoByServiço(teclado: Teclado) {
    this.dataService.setDataAtivo(teclado);
    this.dataService.setDataSeletorComponente("teclados");
  }

}
