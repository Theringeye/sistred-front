import { MensagemService } from 'src/app/shared/service/mensagem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TecladosService } from '../teclados.service';
import { Teclado } from './../teclado';

@Component({
  selector: 'app-del-teclado',
  templateUrl: './del-teclado.component.html',
  styleUrls: ['./del-teclado.component.css']
})
export class DelTecladoComponent implements OnInit {

  private navigateUrl = "teclados";
  ativo: Teclado = new Teclado();

  constructor(
    private service: TecladosService,
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
      this.ativo.padrao = resposta.padrao;
    });
  }

  cancelar(): void {
    this.router.navigate([this.navigateUrl]);
  }

  remover(teclado: Teclado) {
    console.log("removido teclado id:" + teclado.id);

    if (teclado.listaMovimentacaoDTO.length > 0) {
      this.service.mostarMensagem(MensagemService.msgAtivoVinculadoMovimentacao);
    } else {
      this.service.remover(teclado.id).subscribe(
        {
          next: () => this.service.mostarMensagem(MensagemService.msgAtivoRemovidoSucesso),
          error: (e) => this.service.mostarMensagem(MensagemService.msgAtivoNaoRemovido+e),
          complete: () => this.router.navigate([this.navigateUrl])
        }
      );
    }
  }

}
