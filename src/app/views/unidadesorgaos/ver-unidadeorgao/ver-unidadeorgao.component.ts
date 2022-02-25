import { UnidadeOrgao } from './../unidadeorgao';
import { MensagemService } from 'src/app/shared/service/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UnidadesOrgaosService } from './../unidadesorgaos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-unidadeorgao',
  templateUrl: './ver-unidadeorgao.component.html',
  styleUrls: ['./ver-unidadeorgao.component.css']
})
export class VerUnidadeorgaoComponent implements OnInit {

  uo!: UnidadeOrgao;

  constructor(private UnidadesOrgaosService:UnidadesOrgaosService, 
    private router:Router, private mensagemService:MensagemService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['idUO'];
    this.UnidadesOrgaosService.findById(id).subscribe({
      next: (resultado) => this.uo = resultado,
      error: (e) => this.mensagemService.mostraMensagem(e)
    })
  }

  validar():boolean{
    return this.uo.nomeUnidade == "" || this.uo.siglaUnidade == "" ? false : true;
  }

  salvar(){

    if(this.validar()){
      this.UnidadesOrgaosService.alterar(this.uo).subscribe({
        next: () => this.mensagemService.mostraMensagem(MensagemService.msgAlteracaoSucesso),
        error: (e) => this.mensagemService.mostraMensagem(MensagemService.msgAlteradoErro + e),
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
