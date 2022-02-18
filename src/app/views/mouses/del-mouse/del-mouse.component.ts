import { MousesService } from './../mouses.service';
import { Component, OnInit } from '@angular/core';
import { Mouse } from '../mouse';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/shared/service/mensagem.service';

@Component({
  selector: 'app-del-mouse',
  templateUrl: './del-mouse.component.html',
  styleUrls: ['./del-mouse.component.css']
})
export class DelMouseComponent implements OnInit {

  navigateUrl = "mouses";
  ativo: Mouse = new Mouse();

  constructor(
    private service: MousesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const paramId = this.route.snapshot.params.id;
    this.service.findById(paramId).subscribe((resposta) => {
      this.ativo.id = resposta.id;
      this.ativo.patrimonio = resposta.patrimonio;
      this.ativo.modelo = resposta.modelo;
      this.ativo.fabricante = resposta.fabricante;
      this.ativo.codigo_identificacao = resposta.codigo_identificacao;
    });
  }

  cancelar(): void {
    this.router.navigate([this.navigateUrl]);
  }

  remover(mouse: Mouse) {
    console.log("removido mouse id:" + mouse.id);

    if (mouse.listaMovimentacaoDTO.length > 0) {
      this.service.mostrarMensagem(MensagemService.msgAtivoVinculadoMovimentacao);
    } else {
      this.service.remover(mouse.id).subscribe(
        {
          next: () => this.service.mostrarMensagem(MensagemService.msgAtivoRemovidoSucesso),
          error: (e) => this.service.mostrarMensagem(MensagemService.msgAtivoNaoRemovido+e),
          complete: () => this.router.navigate([this.navigateUrl])
        }
      );
    }
  }

}
