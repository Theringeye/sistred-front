import { MensagemService } from './../../../shared/service/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TecladosService } from './../teclados.service';
import { Teclado } from './../teclado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-teclado',
  templateUrl: './ver-teclado.component.html',
  styleUrls: ['./ver-teclado.component.css', '../../../shared/css/form.css', '../../../shared/css/main.css']
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

  alterar():void{
    this.service.alterar(this.teclado).subscribe({
      next: () => this.service.mostarMensagem(MensagemService.msgAtivoAlteradoSucesso),        
      error: (e) => this.service.mostarMensagem(MensagemService.msgAtivoNaoAlterado+e),
      complete: () => this.router.navigateByUrl(this.url)
    });
  }
  
  cancelar():void{
    this.router.navigateByUrl(this.url);
  }

}
