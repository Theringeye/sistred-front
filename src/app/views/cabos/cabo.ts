import { Historico } from "src/app/shared/model/historico";

export class Cabo{
    id: number;
    tipo: string;
    fabricante: string;
    listaMovimentacaoDTO?: [];
    listaHistoricoAtivoDTO?: Historico[];
}