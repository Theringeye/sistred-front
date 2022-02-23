import { Common } from "src/app/shared/model/common";
import { Historico } from "src/app/shared/model/historico";

export class Gabinete extends Common {

	processador!:string;
	memoria!:string;
	tipo_armazenamento!:string;
	tamanho_armazenamento!:string;
	sistema_operacional!:string;
	versao_sistema_operacional!:string;
	licenca_so!:string;

    listaMovimentacaoDTO!: [];
    listaHistoricoAtivoDTO!: Array<Historico>;

}

export type Gabinetes = Array<Gabinete>;
