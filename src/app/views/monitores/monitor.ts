import { Common } from "src/app/shared/model/common";
import { Historico } from "src/app/shared/model/historico";

export class Monitor extends Common{
    tamanho!: string;
    listaMovimentacaoDTO!: [];
    listaHistoricoAtivoDTO!: Historico[];
}

export type Monitores = Array<Monitor>;