import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagemService } from 'src/app/shared/service/mensagem.service';
import { Monitor } from '../monitor';
import { MonitoresService } from '../monitores.service';

@Component({
  selector: 'app-ver-monitor',
  templateUrl: './ver-monitor.component.html',
  styleUrls: ['./ver-monitor.component.css']
})
export class VerMonitorComponent implements OnInit {

  monitor: Monitor = new Monitor();

  constructor(private router:Router, 
    private monitoresService:MonitoresService, 
    private mensagemService: MensagemService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const idMonitor = this.activatedRoute.snapshot.params['idMonitor'];
    this.monitoresService.findById(idMonitor).subscribe(
      { next:(retorno) => this.monitor = retorno }
    );
  }
  
  validar():boolean{
    return this.monitor.patrimonio == null || this.monitor.patrimonio == "" ? false : true; 
  }

  salvar():void{
    if(this.validar()){
      this.monitoresService.alterar(this.monitor).subscribe({
        next: () => this.mensagemService.mostraMensagem(MensagemService.msgAtivoAlteradoSucesso),
        error: (e) => this.mensagemService.mostraMensagem(MensagemService.msgAtivoNaoAlteradoErro + e),
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
