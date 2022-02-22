import { MensagemService } from './../../../shared/service/mensagem.service';
import { MonitoresService } from './../monitores.service';
import { Component, OnInit } from '@angular/core';
import { Monitor } from '../monitor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-del-monitor',
  templateUrl: './del-monitor.component.html',
  styleUrls: ['./del-monitor.component.css']
})
export class DelMonitorComponent implements OnInit {

  constructor(private monitoresService:MonitoresService, 
    private mensagemService:MensagemService,
    private router: Router) { }

  ngOnInit(): void {
  }

  remover(monitor: Monitor){
    this.monitoresService.remover(monitor.id).subscribe({
      next: () => this.mensagemService.mostraMensagem(MensagemService.msgAtivoRemovidoSucesso),
      error: (e) => this.mensagemService.mostraMensagem(MensagemService.msgAtivoNaoRemovido),
      complete: () => this.router.navigate(['monitores'])
    })
  }
}
