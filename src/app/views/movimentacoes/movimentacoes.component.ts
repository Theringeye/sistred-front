import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MockMovimentacoes } from './mock-movimentacao';
import { Movimentacao } from './movimentacao';

@Component({
  selector: 'app-movimentacoes',
  templateUrl: './movimentacoes.component.html',
  styleUrls: ['./movimentacoes.component.css']
})
export class MovimentacoesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  movimentacoes: Movimentacao[] = MockMovimentacoes;
  displayedColumns: string[] = ['patrimonio', 'origem', 'destino', 'movimentacao','tipoMovimentacao',
                                  'dataMovimentacao','statusEquipamento','tecnicoResponsavel',
                                    'responsavelAdministrativo'];
  dataSource = new MatTableDataSource(this.movimentacoes);

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

/*
displayedColumns: string[] = ['patrimonio', 'origem', 'destino', 'movimentacao','tipoMovimentacao',
                                  'dataMovimentacao','statusEquipamento','tecnicoResponsavel',
                                    'responsavelAdministrativo','observacao','situacao'];
*/