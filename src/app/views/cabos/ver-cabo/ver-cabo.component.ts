import { MensagemService } from 'src/app/shared/service/mensagem.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cabo } from '../cabo';
import { CabosService } from '../cabos.service';

@Component({
  selector: 'app-ver-cabo',
  templateUrl: './ver-cabo.component.html',
  styleUrls: ['./ver-cabo.component.css', '../../../shared/css/main.css', '../../../shared/css/form.css']
})
export class VerCaboComponent implements OnInit {

  ativo: Cabo = new Cabo();

  constructor(private service: CabosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const paramId = this.route.snapshot.params.id
    this.service.findById(paramId).subscribe(resposta =>{
      this.ativo.id = resposta.id
      this.ativo.fabricante = resposta.fabricante
      this.ativo.tipo = resposta.tipo
    })
  }

  alterar(){   
    this.service.alterar(this.ativo).subscribe(
      {
        next: () =>  this.service.mostrarMensagem(MensagemService.msgAtivoAlteradoSucesso),
        error: (e) => this.service.mostrarMensagem(MensagemService.msgAtivoNaoCadastrado + e),
        complete: () => this.router.navigate(['cabos'])
      }
    );
  }

  remover(){
    this.router.navigate(["del-cabo/"+this.ativo.id])
  }

  cancelar(){
    this.router.navigate(["cabos"])
  }


}
