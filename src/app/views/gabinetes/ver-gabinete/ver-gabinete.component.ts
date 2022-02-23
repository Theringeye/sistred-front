import { MensagemService } from 'src/app/shared/service/mensagem.service';
import { GabinetesService } from './../gabinetes.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Gabinete } from '../gabinete';

@Component({
  selector: 'app-ver-gabinete',
  templateUrl: './ver-gabinete.component.html',
  styleUrls: ['./ver-gabinete.component.css']
})
export class VerGabineteComponent implements OnInit {

  gabinete: Gabinete = new Gabinete();

  constructor(private router:Router, 
    private gabinetesService:GabinetesService,
    private activatedRoute:ActivatedRoute,
    private mensagemService:MensagemService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['idGabinete'];
    this.gabinetesService.findById(id).subscribe({
      next: (resultado) => this.gabinete = resultado,
      error: (e) => this.mensagemService.mostraMensagem(e)
    })
  }

  validar():boolean{
    return this.gabinete.patrimonio == null || this.gabinete.patrimonio == "" ? false : true;
  }

  salvar(){
    if(this.validar()){
      this.gabinetesService.alterar(this.gabinete).subscribe({
        next: () => this.mensagemService.mostraMensagem(MensagemService.msgAtivoAlteradoSucesso),
        error: (e) => this.mensagemService.mostraMensagem(MensagemService.msgAtivoNaoAlteradoErro+e),
        complete: ()=> this.voltar()
      })
    }else{
      this.mensagemService.mostraMensagem(MensagemService.msgDadosIncompletos);
    }

  }

  voltar():void{
    this.router.navigate(['gabinetes']);
  }

}
