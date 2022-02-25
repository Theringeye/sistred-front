import { MensagemService } from 'src/app/shared/service/mensagem.service';
import { Router } from '@angular/router';
import { UnidadesOrgaosService } from './../unidadesorgaos.service';
import { UnidadeOrgao } from './../unidadeorgao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-del-unidadeorgao',
  templateUrl: './del-unidadeorgao.component.html',
  styleUrls: ['./del-unidadeorgao.component.css']
})
export class DelUnidadeorgaoComponent implements OnInit {

  constructor(private unidadesOrgaosService:UnidadesOrgaosService, 
    private router:Router, private mensagemService:MensagemService) { }

  ngOnInit(): void {
  }

  remover(unidadeOrgao:UnidadeOrgao){
    this.unidadesOrgaosService.remover(unidadeOrgao.id).subscribe({
      next: () => this.mensagemService.mostraMensagem(MensagemService.msgRemovidoSucesso),
      error: (e) => {
        this.mensagemService.mostraMensagem(MensagemService.msgRemovidoError + e.message)
      },
      complete: () => this.router.navigate(['unidadesorgaos'])
    })
  }

}
