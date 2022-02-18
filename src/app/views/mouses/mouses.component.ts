import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DelDialogComponent } from 'src/app/shared/components/del-dialog/del-dialog.component';
import { DataService } from 'src/app/shared/service/data.service';
import { Mouse } from './mouse';
import { MousesService } from './mouses.service';

@Component({
  selector: 'app-mouses',
  templateUrl: './mouses.component.html',
  styleUrls: ['./mouses.component.css']
})
export class MousesComponent implements OnInit {

  dataSource: MatTableDataSource<Mouse>;
  displayedColumns: string[] = ["codigo", "modelo", "fabricante", "acoes"];
  servicoModel: MousesService;

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
    private service: MousesService,
    private router: Router,
    public dialog: MatDialog,
    public dataService: DataService
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  openDialog(mouse: Mouse): void {
    console.log(mouse)
    const dialogRef = this.dialog.open(DelDialogComponent, {
      width: "250px",
      data: {
        nomeComponente: "mouses",
        ativo: mouse,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("A caixa de confirmação fechou.");
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

  irParaFormMouses() {
    this.router.navigate(["form-mouse"]);
  }

  verMais(id: number) {
    this.router.navigate(["ver-mouse/" + id]);
  }

  verHistorico(mouse: Mouse) {
    this.router.navigate(["historico-mouse"]);
    this.goToMouseByServico(mouse);
  }

  goToMouseByServico(mouse: Mouse) {
    this.dataService.setDataAtivo(mouse);
    this.dataService.setDataSeletorComponente("mouses");
  }
}
