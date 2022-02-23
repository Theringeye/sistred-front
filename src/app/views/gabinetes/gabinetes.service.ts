import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MensagemService } from 'src/app/shared/service/mensagem.service';
import { Gabinete } from './gabinete';

@Injectable({
  providedIn: 'root'
})
export class GabinetesService {

  recurso:string = environment.baseUrl.concat('gabinete');
   
  constructor(private http: HttpClient, private mensagemService: MensagemService) { }
  
  findAll():Observable<Gabinete[]>{
    return this.http.get<Gabinete[]>(this.recurso)
  }

  findById(id:string): Observable<Gabinete>{
    return this.http.get<Gabinete>(this.recurso+"/"+id)
  }

  salvar(ativo: Gabinete): Observable<Gabinete>{
    return this.http.post<Gabinete>(this.recurso, ativo);
  }

  remover(id: number): Observable<Gabinete>{
    return this.http.delete<Gabinete>(this.recurso+"/"+id)
  }

  alterar(ativo: Gabinete){
    return this.http.post<Gabinete>(this.recurso, ativo);
  }

  mostrarMensagem(mensagem:string){        
    this.mensagemService.mostraMensagem(mensagem);
  }
}
