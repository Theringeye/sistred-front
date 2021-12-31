import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { Router } from '@angular/router';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
  link?: string;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'PAINEL',
    link: '/painel',
  },
  {
    name: 'ATIVOS',
    link: '',
    children: [
      {
        name: 'CABOS',
        link: '/cabos',
      },
      {
        name: 'TECLADO',
        link: '',
        
      },
    ],
  },
  {
    name: 'MOVIMENTAÇÃO',
    link: '',
    children: [
      {
        name: 'CADASTRAR',
        link: '/form-movimentacoes',
      },
      {
        name: 'LISTAR',
        link: '/movimentacoes',
        
      },
    ],
  },
  {
    name: 'RELATÓRIO',
    link: '',
    children: [
      {
        name: 'ATIVO',
        link: '',
      },
      {
        name: 'MOVIMENTACAO',
        link: '',
        
      },
    ],
  },
];

@Component({
  selector: 'app-navtree',
  templateUrl: './navtree.component.html',
  styleUrls: ['./navtree.component.css']
})
export class NavtreeComponent {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

 
  
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}
