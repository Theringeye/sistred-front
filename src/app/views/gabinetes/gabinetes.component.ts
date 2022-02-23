import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';
import { OpendialogService } from 'src/app/shared/service/opendialog.service';
import { Gabinete } from './gabinete';
import { GabinetesService } from './gabinetes.service';

@Component({
  selector: 'app-gabinetes',
  templateUrl: './gabinetes.component.html',
  styleUrls: ['./gabinetes.component.css']
})
export class GabinetesComponent implements OnInit {

  dataSource: MatTableDataSource<Gabinete>;
  displayedColumns: string[] = ["patrimonio", 
      "processador","memoria","tipo_armazenamento","tamanho_armazenamento",
      "sistema_operacional","versao_sistema_operacional", "acoes"];
  servicoModel: GabinetesService;

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
    private service: GabinetesService,
    private router: Router,
    public dataService: DataService,
    private opendialogService: OpendialogService,
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  openDialog(gabinete: Gabinete): void {
    this.opendialogService.openDialog(gabinete, "gabinetes");
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(resposta);
    });
  }

  irParaFormGabinete() {
    this.router.navigate(["form-gabinete"]);
  }

  verMais(id: number) {
    this.router.navigate(["ver-gabinete/" + id]);
  }

  verHistorico(gabinete: Gabinete) {
    this.router.navigate(["historico-gabinete"]);
    this.goToByServico(gabinete);
  }

  goToByServico(gabinete: Gabinete) {
    this.dataService.setDataAtivo(gabinete);
    this.dataService.setDataSeletorComponente("gabinetes");
  }

}
