import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MensagemService } from 'src/app/shared/service/mensagem.service';
import { TecnicoAdministrativo, TecnicosAdministrativos } from './tecnicosadministrativos';

@Injectable({
  providedIn: 'root'
})
export class TecnicosAdministrativosService {

  recurso:string = environment.baseUrl.concat('ta');
   
  constructor(private http: HttpClient, private mensagemService: MensagemService) { }
  
  findAll():Observable<TecnicosAdministrativos>{
    return this.http.get<TecnicosAdministrativos>(this.recurso)
  }

  findById(id:string): Observable<TecnicoAdministrativo>{
    return this.http.get<TecnicoAdministrativo>(this.recurso+"/"+id)
  }

  salvar(ativo: TecnicoAdministrativo): Observable<TecnicoAdministrativo>{
    return this.http.post<TecnicoAdministrativo>(this.recurso, ativo);
  }

  remover(id: number): Observable<TecnicoAdministrativo>{
    return this.http.delete<TecnicoAdministrativo>(this.recurso+"/"+id)
  }

  alterar(ativo: TecnicoAdministrativo){
    return this.http.post<TecnicoAdministrativo>(this.recurso, ativo);
  }

  mostrarMensagem(mensagem:string){        
    this.mensagemService.mostraMensagem(mensagem);
  }
}
