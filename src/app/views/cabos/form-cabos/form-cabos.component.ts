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
  mensagemDadosIncompletos = "Preencha todos os campos antes de inserir!";
  cabo: Cabo = new Cabo();

  tipos: string[] = [
    'Americano',
    'Americano Y',
    'Europeu',
    'Europeu Y',
  ];

  constructor(private service: CabosService, private router: Router) { }

  ngOnInit(): void {
  }

  salvar():void{
    if(this.cabo == null || this.cabo.tipo == null || this.cabo.fabricante == null
      ||  this.cabo.fabricante === ''){

      this.service.mensagem(this.mensagemDadosIncompletos);

    }else{
    this.service.salvar(this.cabo).subscribe((resposta)=>{
      this.router.navigate(['cabos'])
      this.service.mensagem(this.mensagemSucesso)
    }, err => {      
        this.service.mensagem(this.mensagemErro);      
    });
  }
  }
  cancelar():void{
    this.router.navigate(['cabos'])
  }

}
