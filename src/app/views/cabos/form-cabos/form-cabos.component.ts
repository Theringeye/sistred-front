import { MensagemService } from 'src/app/shared/service/mensagem.service';
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

      this.service.mostrarMensagem(MensagemService.msgDadosIncompletos);

    }else{
    this.service.salvar(this.cabo).subscribe((resposta)=>{
      this.router.navigate(['cabos'])
      this.service.mostrarMensagem(MensagemService.msgAtivoCadastroSucesso);
    }, err => {      
        this.service.mostrarMensagem(MensagemService.msgAtivoNaoCadastrado);      
    });
  }
  }
  cancelar():void{
    this.router.navigate(['cabos'])
  }

}
