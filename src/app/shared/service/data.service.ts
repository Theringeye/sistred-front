import { Historico } from "src/app/shared/model/historico";
import { Injectable } from "@angular/core";
import { Cabo } from "src/app/views/cabos/cabo";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private seletor: string;
  private ativo: any;

  constructor() {}

  setDataSeletorComponente(seletor: string) {
    this.seletor = seletor;
  }

  getDataSeletorComponente() {
    return this.seletor;
  }

  setDataAtivo(ativo: any) {
    this.ativo = ativo;
  }

  getDataAtivo() {
    return this.ativo;
  }
}
