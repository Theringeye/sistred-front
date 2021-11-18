import { Component, OnInit } from '@angular/core';
import { Ativo } from './ativo';
import { Fornecedor } from './fornecedor';
import { Ativos } from './mock-ativos';
import { Fornecedores } from './mock-fornecedor';

@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.css']
})
export class AtivosComponent implements OnInit {

  ativos: Ativo[] = Ativos;
  fornecedores: Fornecedor[] = Fornecedores;

  constructor() { }

  ngOnInit(): void {
  }

}
