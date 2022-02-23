import { MensagemService } from 'src/app/shared/service/mensagem.service';
import { GabinetesService } from './../gabinetes.service';
import { Gabinete } from './../gabinete';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-gabinete',
  templateUrl: './form-gabinete.component.html',
  styleUrls: ['./form-gabinete.component.css']
})
export class FormGabineteComponent implements OnInit {

  gabinete: Gabinete = new Gabinete();

  constructor(private gabinetesService:GabinetesService, private router:Router, private mensagemService:MensagemService) { }

  ngOnInit(): void {
  }

  validar():boolean{
    return this.gabinete.patrimonio == null || this.gabinete.patrimonio == "" ? false : true;
  }

  salvar(){
    if(this.validar()){
      this.gabinetesService.salvar(this.gabinete).subscribe({
        next: () => this.mensagemService.mostraMensagem(MensagemService.msgAtivoCadastroSucesso),
        error: (e) => this.mensagemService.mostraMensagem(MensagemService.msgAtivoNaoCadastrado + e),
        complete: () => this.voltar()
      });
    }else{
      this.mensagemService.mostraMensagem(MensagemService.msgDadosIncompletos);
    }
  }

  voltar():void{
    this.router.navigate(['gabinetes']);
  }

}
