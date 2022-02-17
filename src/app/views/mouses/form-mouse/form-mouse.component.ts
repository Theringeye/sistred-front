import { MousesService } from './../mouses.service';
import { Mouse } from './../mouse';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Common } from 'src/app/shared/model/common';
import { MensagemService } from 'src/app/shared/service/mensagem.service';

@Component({
  selector: 'app-form-mouse',
  templateUrl: './form-mouse.component.html',
  styleUrls: ['./form-mouse.component.css']
})
export class FormMouseComponent implements OnInit {

  mouse!:Mouse;

  constructor(private mensagemService: MensagemService, private service: MousesService, private router:Router) { }

  ngOnInit(): void {
    this.mouse = new Mouse();
  }

  validar(ativo:Mouse):boolean{
    return ativo.codigo_identificacao == null ? false : true;
  }

  salvar(){
    if(this.validar(this.mouse)){
      this.service.salvar(this.mouse).subscribe({
        next: () => {
          this.mensagemService.mostraMensagem(MensagemService.msgAtivoCadastroSucesso)
        },
        error: (e) => {
          console.log(e);
          this.mensagemService.mostraMensagem(MensagemService.msgAtivoNaoCadastrado)
        },
        complete: () => this.router.navigate(['mouses'])
      })
    }else{
      this.mensagemService.mostraMensagem(MensagemService.msgDadosIncompletos)
    }
  }

  cancelar(){
    this.router.navigate(['mouses']);
  }

}
