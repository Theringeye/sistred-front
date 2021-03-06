import { MensagemService } from './../../shared/service/mensagem.service';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Teclado } from "./teclado";

@Injectable({
    providedIn: "root",
  })
export class TecladosService{
  
  recurso:string = environment.baseUrl.concat('teclado');
   
  constructor(private http: HttpClient, private mensagemService: MensagemService) { }
  
  findAll():Observable<Teclado[]>{
    return this.http.get<Teclado[]>(this.recurso)
  }

  findById(id:string): Observable<Teclado>{
    return this.http.get<Teclado>(this.recurso+"/"+id)
  }

  salvar(ativo: Teclado): Observable<Teclado>{
    return this.http.post<Teclado>(this.recurso, ativo);
  }

  remover(id: number): Observable<Teclado>{
    return this.http.delete<Teclado>(this.recurso+"/"+id)
  }

  alterar(ativo: Teclado){
    return this.http.post<Teclado>(this.recurso, ativo);
  }

  mostrarMensagem(mensagem:string){        
    this.mensagemService.mostraMensagem(mensagem);
  }
}