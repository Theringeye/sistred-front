import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../../ativos/fornecedor';
import { Fornecedores } from '../../ativos/mock-fornecedor';

@Component({
  selector: 'app-form-ativos',
  templateUrl: './form-ativos.component.html',
  styleUrls: ['./form-ativos.component.css']
})
export class FormAtivosComponent implements OnInit {

  fornecedores: Fornecedor[] = Fornecedores;
  constructor() { }

  ngOnInit(): void {
  }

}
