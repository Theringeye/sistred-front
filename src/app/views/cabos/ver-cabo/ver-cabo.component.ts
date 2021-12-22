import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cabo } from '../cabo';
import { CabosService } from '../cabos.service';

@Component({
  selector: 'app-ver-cabo',
  templateUrl: './ver-cabo.component.html',
  styleUrls: ['./ver-cabo.component.css']
})
export class VerCaboComponent implements OnInit {

  ativo: Cabo = new Cabo();
  paramId: string = "";
  mensagemSucesso = "Ativo alterado com sucesso!";
  mensagemErro = "Ativo não foi alterado!";

  constructor(private service: CabosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.paramId = this.route.snapshot.params.id
    this.service.findById(this.paramId).subscribe(resposta =>{
      this.ativo.id = resposta.id
      this.ativo.fabricante = resposta.fabricante
      this.ativo.tipo = resposta.tipo
    })
  }

  alterar(){
    console.log("cabo alterado " + this.ativo.id)
    this.service.alterar(this.ativo).subscribe(resposta=>{
      this.router.navigate(['cabos'])
      this.service.mensagem(this.mensagemSucesso)
    }, err =>{
      this.service.mensagem(this.mensagemErro)
    });
  }

  remover(){
    this.router.navigate(["del-cabo/"+this.ativo.id])
  }


}
