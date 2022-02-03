import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cabo } from "./cabo";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CabosService {
    
  recurso:string = environment.baseUrl.concat('cabo');
  public cabo: Cabo;
  
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
  
  findAll():Observable<Cabo[]>{
    return this.http.get<Cabo[]>(this.recurso)
  }

  findById(id:string): Observable<Cabo>{
    return this.http.get<Cabo>(this.recurso+"/"+id)
  }

  salvar(ativo: Cabo): Observable<Cabo>{
    return this.http.post<Cabo>(this.recurso, ativo);
  }

  remover(id: number): Observable<Cabo>{
    return this.http.delete<Cabo>(this.recurso+"/"+id)
  }

  alterar(ativo: Cabo){
    return this.http.post<Cabo>(this.recurso, ativo);
  }

  mostrarMensagem(msg: string){
    this._snackBar.open(msg,"Fechar",{
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000
    });
  }

}
