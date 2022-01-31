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

  ativo: Teclado = new Teclado();
  paramId: string = "";
  mensagemSucesso = "Ativo removido com sucesso!";
  mensagemErro = "Ativo não foi removido!";
  mensagemPossuiMovimentacao = "Ativo vinculado a movimentação";
  navigateUrl = "teclados";

  constructor(
    private service: TecladosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paramId = this.route.snapshot.params.id;
    this.service.findById(this.paramId).subscribe((resposta) => {
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
      this.service.mensagem(this.mensagemPossuiMovimentacao);
    } else {
      this.service.remover(teclado.id).subscribe(
        (resposta) => {
          this.router.navigate([this.navigateUrl]);
          this.service.mensagem(this.mensagemSucesso);
        },
        (err) => {
          this.service.mensagem(this.mensagemErro);
        }
      );
    }
  }

}
