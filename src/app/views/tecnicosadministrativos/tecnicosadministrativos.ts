
import { UnidadeOrgao } from './../unidadesorgaos/unidadeorgao';
export class TecnicoAdministrativo {

    id: number;
	nomeTecnico: string;
	unidadeOrgaoLotacao: UnidadeOrgao;
	telefoneRamalDepartamentoOrgao: string;
	listaMovimentacaoResponsavelTecnicoDTO!:[];
	plistaMovimentacaoResponsavelAdministrativoDTO!:[];

}

export type TecnicosAdministrativos = Array<TecnicoAdministrativo>;
