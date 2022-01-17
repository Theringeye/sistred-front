import { Common } from "src/app/shared/model/common";
import { Historico } from "src/app/shared/model/historico";

export class Teclado extends Common{
    padrao: string;
    listaMovimentacaoDTO?: [];
    listaHistoricoAtivoDTO?: Historico[];
}

