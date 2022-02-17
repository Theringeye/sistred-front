import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mouse, Mouses } from './mouse';
import { MensagemService } from 'src/app/shared/service/mensagem.service';

const API = environment.baseUrl;
const RECURSOAPI = API.concat('mouse');

@Injectable({
  providedIn: 'root'
})
export class MousesService {
   
  constructor(private http: HttpClient, private mensagemService: MensagemService) { }
  
  findAll():Observable<Mouses>{
    return this.http.get<Mouses>(RECURSOAPI)
  }

  findById(id:string): Observable<Mouse>{
    return this.http.get<Mouse>(`${RECURSOAPI}/${id}`)
  }

  salvar(ativo: Mouse): Observable<Mouse>{
    return this.http.post<Mouse>(RECURSOAPI, ativo);
  }

  remover(id: number): Observable<Mouse>{
    return this.http.delete<Mouse>(`${RECURSOAPI}/${id}`)
  }

  alterar(ativo: Mouse){
    return this.http.post<Mouse>(RECURSOAPI, ativo);
  }

  mostarMensagem(mensagem:string){        
    this.mensagemService.mostraMensagem(mensagem);
  }
}
