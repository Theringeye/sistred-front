import { Component } from "@angular/core";
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";


interface Menu {
  name: string;
  children?: Menu[];
  link?: string;
}

const TREE_DATA: Menu[] = [
  {
    name: "PAINEL",
    link: "/painel",
  },
  {
    name: "ATIVOS",
    link: "",
    children: [
      {
        name: "CABOS",
        link: "/cabos",
      },
      {
        name: "TECLADOS",
        link: "/teclados",
      },
      {
        name: "MOUSES",
        link: "/mouses",
      },
    ],
  },
  {
    name: "MOVIMENTAÇÃO",
    link: "",
    children: [
      {
        name: "CADASTRAR",
        link: "/form-movimentacoes",
      },
      {
        name: "LISTAR",
        link: "/movimentacoes",
      },
    ],
  },
  {
    name: "RELATÓRIO",
    link: "",
    children: [
      {
        name: "ATIVO",
        link: "",
      },
      {
        name: "MOVIMENTACAO",
        link: "",
      },
    ],
  },
];

@Component({
  selector: "app-navtree",
  templateUrl: "./navtree.component.html",
  styleUrls: ["./navtree.component.css"],
})
export class NavtreeComponent {
  treeControl = new NestedTreeControl<Menu>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<Menu>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: Menu) =>
    !!node.children && node.children.length > 0;
}
