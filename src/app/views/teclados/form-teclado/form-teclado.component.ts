import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Common } from 'src/app/shared/model/common';
import { MensagemService } from 'src/app/shared/service/mensagem.service';
import { Teclado } from '../teclado';
import { TecladosService } from '../teclados.service';

@Component({
  selector: 'app-form-teclado',
  templateUrl: './form-teclado.component.html',
  styleUrls: ['./form-teclado.component.css', '../../../shared/css/main.css', '../../../shared/css/form.css']
})
export class FormTecladoComponent implements OnInit {
  
  msgAtivoCadastradoSucesso = 'Ativo cadastrado com sucesso!';
  msgErro = 'Não foi possível cadastrar ativo';

  teclado: Teclado = new Teclado();
  ativoValidado:boolean = false;

  constructor(private service: TecladosService, private router: Router) { 

  }

  ngOnInit(): void {
  }

  salvar(): void{
    this.ativoValidado = this.validar(this.teclado);
    if(this.ativoValidado){
      this.service.salvar(this.teclado).subscribe((resposta)=>{
        this.router.navigate(['teclados'])
        this.service.mostarMensagem(MensagemService.msgAtivoCadastroSucesso);
      }, err => {      
          this.service.mostarMensagem(MensagemService.msgAtivoNaoCadastrado);      
      });     

    }else{
      this.service.mostarMensagem(MensagemService.msgAtivoNaoAlteradoErro);
    }
}

  cancelar():void{
    this.router.navigate(["teclados"]);
  }

  validar(ativo:Common):boolean{
    if(ativo.patrimonio == null || ativo.patrimonio == ''){
      return false;
    }
    return true;
  }

}
