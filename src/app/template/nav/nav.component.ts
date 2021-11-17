import { Component, OnInit } from '@angular/core';
import { NAVEGACAO } from './mock-navegacao';
import { Navegacao } from './navegacao';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  navegacoes = NAVEGACAO;
  selectedNavegacao?: Navegacao;

  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

  //opcoesNav: string[] = ['Painel','Ativos', 'Movimentacoes'];
  onSelect(nav: Navegacao):void { 
    this.selectedNavegacao = nav; 
  }

}
