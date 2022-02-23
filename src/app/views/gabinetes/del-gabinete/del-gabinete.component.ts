import { MensagemService } from 'src/app/shared/service/mensagem.service';
import { GabinetesService } from './../gabinetes.service';
import { Component, OnInit } from '@angular/core';
import { Gabinete } from '../gabinete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-del-gabinete',
  templateUrl: './del-gabinete.component.html',
  styleUrls: ['./del-gabinete.component.css']
})
export class DelGabineteComponent implements OnInit {

  constructor(private gabinetesService:GabinetesService, private mensagemService:MensagemService, private router:Router) { }

  ngOnInit(): void {
  }

  remover(gabinete: Gabinete){
    this.gabinetesService.remover(gabinete.id).subscribe({
      next: ()=> this.mensagemService.mostraMensagem(MensagemService.msgAtivoRemovidoSucesso),
      error: (e) => this.mensagemService.mostraMensagem(MensagemService.msgAtivoNaoRemovido + e),
      complete: () => this.router.navigate(['gabinetes'])
    })
  }

}
