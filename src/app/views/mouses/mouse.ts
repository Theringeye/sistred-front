import { Common } from "src/app/shared/model/common";
import { Historico } from "src/app/shared/model/historico";

export interface Mouse extends Common {
    codigoIdentificacao?: number;
    listaMovimentacaoDTO?: [];
    listaHistoricoAtivoDTO?: Historico[];
}

export type Mouses = Array<Mouse>;
