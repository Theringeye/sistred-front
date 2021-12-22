import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cabo } from '../cabo';
import { CabosService } from '../cabos.service';

@Component({
  selector: 'app-form-cabos',
  templateUrl: './form-cabos.component.html',
  styleUrls: ['./form-cabos.component.css']
})
export class FormCabosComponent implements OnInit {
  mensagemSucesso = "Ativo cadastrado com sucesso!";
  mensagemErro = "Ativo não foi cadastrado!";
  ativo: Cabo = new Cabo();

  constructor(private service: CabosService, private router: Router) { }

  ngOnInit(): void {
  }

  salvar():void{
    this.service.salvar(this.ativo).subscribe((resposta)=>{
      this.router.navigate(['cabos'])
      this.service.mensagem(this.mensagemSucesso)
    }, err => {      
        this.service.mensagem(this.mensagemErro);      
    });
  }
  cancelar():void{
    this.router.navigate(['cabos'])
  }

}
