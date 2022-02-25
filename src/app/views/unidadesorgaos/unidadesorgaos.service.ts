import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensagemService } from 'src/app/shared/service/mensagem.service';
import { UnidadeOrgao } from './unidadeorgao';

@Injectable({
  providedIn: 'root'
})
export class UnidadesOrgaosService {

  recurso:string = environment.baseUrl.concat('unidadeorgao');
   
  constructor(private http: HttpClient, private mensagemService: MensagemService) { }
  
  findAll():Observable<UnidadeOrgao[]>{
    return this.http.get<UnidadeOrgao[]>(this.recurso)
  }

  findById(id:string): Observable<UnidadeOrgao>{
    return this.http.get<UnidadeOrgao>(this.recurso+"/"+id)
  }

  salvar(ativo: UnidadeOrgao): Observable<UnidadeOrgao>{
    return this.http.post<UnidadeOrgao>(this.recurso, ativo);
  }

  remover(id: number): Observable<UnidadeOrgao>{
    return this.http.delete<UnidadeOrgao>(this.recurso+"/"+id)
  }

  alterar(ativo: UnidadeOrgao){
    return this.http.post<UnidadeOrgao>(this.recurso, ativo);
  }

  mostrarMensagem(mensagem:string){        
    this.mensagemService.mostraMensagem(mensagem);
  }
}
