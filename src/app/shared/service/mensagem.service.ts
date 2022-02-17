import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  static msgAtivoCadastroSucesso: string = "Ativo cadastrado com sucesso!";
  static msgAtivoNaoCadastrado: string = "Ativo não foi cadastrado.";
  
  static msgAtivoNaoAlterado: string = "Ativo não foi alterado.";
  static msgAtivoAlteradoSucesso: string = "Ativo foi alterado com sucesso!";
  static msgAtivoNaoAlteradoErro: string = "Ativo não foi alterado devido pendência.";

  static msgAtivoRemovidoSucesso: string = "Ativo removido com sucesso!";
  static msgAtivoNaoRemovido: string = "Ativo não foi removido!";

  static msgAtivoVinculadoMovimentacao: string = "Não foi possível realizar operação. Ativo vinculado a movimentação";
  static msgDadosIncompletos: string = "Preencha todos os campos antes de inserir!";

  constructor(private _snackBar: MatSnackBar) { }

  mostraMensagem(mensagem:string){
    this._snackBar.open(mensagem,"Fechar",{
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000
    });
  }
}
