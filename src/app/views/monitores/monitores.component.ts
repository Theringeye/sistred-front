import { OpendialogService } from './../../shared/service/opendialog.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DelDialogComponent } from 'src/app/shared/components/del-dialog/del-dialog.component';
import { DataService } from 'src/app/shared/service/data.service';
import { Monitor } from './monitor';
import { MonitoresService } from './monitores.service';

@Component({
  selector: 'app-monitores',
  templateUrl: './monitores.component.html',
  styleUrls: ['./monitores.component.css']
})
export class MonitoresComponent implements OnInit {

  dataSource: MatTableDataSource<Monitor>;
  displayedColumns: string[] = ["patrimonio", "modelo", "fabricante", "tamanho", "acoes"];
  servicoModel: MonitoresService;

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
    private service: MonitoresService,
    private router: Router,
    public dialog: MatDialog,
    public dataService: DataService,
    private opendialogService: OpendialogService,
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  openDialog(monitor: Monitor, component: string): void {
    this.opendialogService.openDialog(monitor, "monitores");
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(resposta);
    });
  }

  irParaFormMonitor() {
    this.router.navigate(["form-monitor"]);
  }

  verMais(id: number) {
    this.router.navigate(["ver-monitor/" + id]);
  }

  verHistorico(monitor: Monitor) {
    this.router.navigate(["historico-monitor"]);
    this.goToTecladoByServiço(monitor);
  }

  goToTecladoByServiço(monitor: Monitor) {
    this.dataService.setDataAtivo(monitor);
    this.dataService.setDataSeletorComponente("monitores");
  }

}
