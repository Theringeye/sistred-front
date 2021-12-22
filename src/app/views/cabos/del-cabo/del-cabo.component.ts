import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cabo } from '../cabo';
import { CabosService } from '../cabos.service';

@Component({
  selector: 'app-del-cabo',
  templateUrl: './del-cabo.component.html',
  styleUrls: ['./del-cabo.component.css']
})
export class DelCaboComponent implements OnInit {
  ativo: Cabo = new Cabo();
  paramId: string = "";
  mensagemSucesso = "Ativo removido com sucesso!";
  mensagemErro = "Ativo não foi removido!";

  constructor(private service: CabosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.paramId = this.route.snapshot.params.id
    this.service.findById(this.paramId).subscribe(resposta =>{
      this.ativo.id = resposta.id
      this.ativo.fabricante = resposta.fabricante
      this.ativo.tipo = resposta.tipo
    })
  }

  cancelar():void{
    this.router.navigate(['cabos'])
  }

  remover(id: number){   
    console.log("removido cabo id:" + id);
    this.service.remover(id).subscribe(resposta =>{
      this.router.navigate(['cabos'])
      this.service.mensagem(this.mensagemSucesso)
    }, err => {
      this.service.mensagem(this.mensagemErro)
    })
  }


}
