import { MonitoresService } from './../monitores.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Monitor } from '../monitor';
import { MensagemService } from 'src/app/shared/service/mensagem.service';

@Component({
  selector: 'app-form-monitor',
  templateUrl: './form-monitor.component.html',
  styleUrls: ['./form-monitor.component.css']
})
export class FormMonitorComponent implements OnInit {

  monitor: Monitor = new Monitor();

  constructor(private router:Router, private monitoresService:MonitoresService, private mensagemService: MensagemService) { }

  ngOnInit(): void {
  }
  
  validar():boolean{
    return this.monitor.patrimonio == null || this.monitor.patrimonio == "" ? false : true; 
  }

  salvar():void{
    if(this.validar()){
      this.monitoresService.salvar(this.monitor).subscribe({
        next: () => this.mensagemService.mostraMensagem(MensagemService.msgAtivoCadastroSucesso),
        error: (e) => this.mensagemService.mostraMensagem(MensagemService.msgAtivoNaoCadastrado + e),
        complete: () => this.voltar() 
      })
    }else{
      this.mensagemService.mostraMensagem(MensagemService.msgDadosIncompletos);
    }
  }
  
  voltar():void{
    this.router.navigate(['monitores']);
  }


}
