import { MousesService } from './../mouses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Mouse } from '../mouse';
import { MensagemService } from 'src/app/shared/service/mensagem.service';

const NAVIGATEURL = 'mouses';

@Component({
  selector: 'app-ver-mouse',
  templateUrl: './ver-mouse.component.html',
  styleUrls: ['./ver-mouse.component.css']
})
export class VerMouseComponent implements OnInit {

  mouse:Mouse = new Mouse();

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private service: MousesService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['mouseId'];
    this.service.findById(id).subscribe({
      next: (mouse) => {
        this.mouse = mouse;
      },
      error: (e) => console.log(e)
    })
  }

  validar(ativo: Mouse):boolean{
    return ativo.codigo_identificacao == null || ativo.codigo_identificacao == "" ? false : true;
  }

  alterar():void{
    if(this.validar(this.mouse)){
      this.service.alterar(this.mouse).subscribe({
        next: () => {this.service.mostrarMensagem(MensagemService.msgAtivoAlteradoSucesso)},
        error: (e) => this.service.mostrarMensagem(MensagemService.msgAtivoNaoAlteradoErro+e),
        complete: () => this.router.navigate([NAVIGATEURL]) 
      });
    }else{
      this.service.mostrarMensagem(MensagemService.msgDadosIncompletos)
    }
  }

  cancelar():void{
    this.router.navigate([NAVIGATEURL]);
  }

}
