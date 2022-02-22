import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensagemService } from 'src/app/shared/service/mensagem.service';
import { Monitor } from './monitor';

@Injectable({
  providedIn: 'root'
})
export class MonitoresService {

  recurso:string = environment.baseUrl.concat('monitor');
   
  constructor(private http: HttpClient, private mensagemService: MensagemService) { }
  
  findAll():Observable<Monitor[]>{
    return this.http.get<Monitor[]>(this.recurso)
  }

  findById(id:string): Observable<Monitor>{
    return this.http.get<Monitor>(this.recurso+"/"+id)
  }

  salvar(ativo: Monitor): Observable<Monitor>{
    return this.http.post<Monitor>(this.recurso, ativo);
  }

  remover(id: number): Observable<Monitor>{
    return this.http.delete<Monitor>(this.recurso+"/"+id)
  }

  alterar(ativo: Monitor){
    return this.http.post<Monitor>(this.recurso, ativo);
  }

  mostrarMensagem(mensagem:string){        
    this.mensagemService.mostraMensagem(mensagem);
  }
}
