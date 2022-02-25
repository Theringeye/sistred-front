import { MensagemService } from './../../../shared/service/mensagem.service';
import { Router } from '@angular/router';
import { UnidadesOrgaosService } from './../unidadesorgaos.service';
import { UnidadeOrgao } from './../unidadeorgao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-unidadeorgao',
  templateUrl: './form-unidadeorgao.component.html',
  styleUrls: ['./form-unidadeorgao.component.css']
})
export class FormUnidadeorgaoComponent implements OnInit {

  uo:UnidadeOrgao = new UnidadeOrgao();

  constructor(private unidadesOrgaosService:UnidadesOrgaosService, 
    private router: Router,
    private mensagemService:MensagemService) { }

  ngOnInit(): void {
  }

  validar():boolean{
    return this.uo.nomeUnidade == "" || this.uo.siglaUnidade == "" ? false : true; 
  }

  salvar(){
    if(this.validar()){
      this.unidadesOrgaosService.salvar(this.uo).subscribe({
        next: () => this.mensagemService.mostraMensagem(MensagemService.msgCadastroSucesso),
        error: (e) => this.mensagemService.mostraMensagem(MensagemService.msgCadastroErro + e),
        complete: () => this.voltar()
      })
    }else{
      this.mensagemService.mostraMensagem(MensagemService.msgDadosIncompletos);
    }
  }

  voltar(){
    this.router.navigate(['unidadesorgaos']);
  }

}
