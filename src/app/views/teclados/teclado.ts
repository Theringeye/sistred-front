import { Historico } from "src/app/shared/model/historico";

export class Teclado{
    id: number;
    modelo: string;
    fabricante: string;
    patrimonio: string;
    padrao: string;
    listaMovimentacaoDTO?: [];
    listaHistoricoAtivoDTO?: Historico[];
}

