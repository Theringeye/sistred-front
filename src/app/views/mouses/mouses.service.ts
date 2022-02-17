import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mouse, Mouses } from './mouse';
import { MensagemService } from 'src/app/shared/service/mensagem.service';

const API = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class MousesService {

  recurso:string = API.concat('mouse');
   
  constructor(private http: HttpClient, private mensagemService: MensagemService) { }
  
  findAll():Observable<Mouses>{
    return this.http.get<Mouses>(this.recurso)
  }

  findById(id:string): Observable<Mouse>{
    return this.http.get<Mouse>(this.recurso+"/"+id)
  }

  salvar(ativo: Mouse): Observable<Mouse>{
    return this.http.post<Mouse>(this.recurso, ativo);
  }

  remover(id: number): Observable<Mouse>{
    return this.http.delete<Mouse>(this.recurso+"/"+id)
  }

  alterar(ativo: Mouse){
    return this.http.post<Mouse>(this.recurso, ativo);
  }

  mostarMensagem(mensagem:string){        
    this.mensagemService.mostraMensagem(mensagem);
  }
}
