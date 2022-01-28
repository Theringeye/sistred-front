import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Common } from 'src/app/shared/model/common';
import { Teclado } from '../teclado';
import { TecladosService } from '../teclados.service';

@Component({
  selector: 'app-form-teclado',
  templateUrl: './form-teclado.component.html',
  styleUrls: ['./form-teclado.component.css']
})
export class FormTecladoComponent implements OnInit {
  mensagemSucesso = "Ativo cadastrado com sucesso!";
  mensagemErro = "Ativo não foi cadastrado!";
  mensagemDadosIncompletos = "Preencha todos os campos antes de inserir!";
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
        this.service.mensagem(this.mensagemSucesso)
      }, err => {      
          this.service.mensagem(this.mensagemErro);      
      });     

    }else{
      this.service.mensagem(this.mensagemDadosIncompletos);
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
