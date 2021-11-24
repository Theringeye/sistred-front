import { Movimentacao } from "./movimentacao";

export const MockMovimentacoes: Movimentacao[] = [
    {patrimonio: 789654, 
        origemAtivo: "Reitoria",
        destinoAtivo: "Cercomp",
        movimentacao: 1,
        tipoMovimentacao: "Recolhimento",
        dataMovimentacao: "12/01/2020",
        statusEquipamento: "usado",
        tecnicoResponsavel: "Murilo",
        responsavelAdministrativo: "Rodineli",
        observacao: "muito lento",
        situacao: "guardado no laboratorio"
    },
    {patrimonio: 634654, 
        origemAtivo: "Cercomp",
        destinoAtivo: "PROAD",
        movimentacao: 2,
        tipoMovimentacao: "Relocação",
        dataMovimentacao: "30/02/2021",
        statusEquipamento: "usado",
        tecnicoResponsavel: "Gustavo",
        responsavelAdministrativo: "Ericson",
        observacao: "sem movimentacao no sistema",
        situacao: "guardado no laboratorio"
    },
]