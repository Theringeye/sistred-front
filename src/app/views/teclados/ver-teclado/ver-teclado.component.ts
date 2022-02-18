import { MensagemService } from './../../../shared/service/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TecladosService } from './../teclados.service';
import { Teclado } from './../teclado';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ver-teclado',
  templateUrl: './ver-teclado.component.html',
  styleUrls: ['./ver-teclado.component.css']
})
export class VerTecladoComponent implements OnInit {
  private url = 'teclados';
  mensagemSucesso = 'Teclado alterado com sucesso';
  teclado: Teclado = new Teclado();

  constructor(private service: TecladosService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activedRoute.snapshot.params.id;
    this.service.findById(id).subscribe({
      next: (resultado) => { this.teclado = resultado },
      error: (e) => console.log(e)
    });
  }

  validar(ativo: Teclado):boolean{
    return ativo.patrimonio == null || ativo.patrimonio == "" ? false : true;
  }

  alterar():void{
    if(this.validar(this.teclado)){
      this.service.alterar(this.teclado).subscribe({
        next: () => {this.service.mostrarMensagem(MensagemService.msgAtivoAlteradoSucesso)},
        error: (e) => this.service.mostrarMensagem(MensagemService.msgAtivoNaoAlterado+e),
        complete: () => this.router.navigateByUrl(this.url)
      });
    }else{
        this.service.mostrarMensagem(MensagemService.msgDadosIncompletos);     
    }        
  }
  
  cancelar():void{
    this.router.navigateByUrl(this.url);
  }

}
