import { Common } from "src/app/shared/model/common";
import { Historico } from "src/app/shared/model/historico";

export class Mouse extends Common {
    codigo_identificacao?: number;
    listaMovimentacaoDTO?: [];
    listaHistoricoAtivoDTO?: Historico[];
}

export type Mouses = Array<Mouse>;
