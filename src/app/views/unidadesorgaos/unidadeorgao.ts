export class UnidadeOrgao {
   id: number;
   nomeUnidade: string;
   siglaUnidade: string;
   telefoneRamal: string;
   listaMovimentacaoOrigemDTO = [];
   listaMovimentacaoDestinoDTO = [];
   listaTecnicoAdministrativoDTO = [];
}


export type UnidadesOrgaos = Array<UnidadeOrgao>;
