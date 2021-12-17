import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cabo } from "./cabo";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CabosService {
  
  recurso:string = environment.baseUrl.concat('cabo');
  
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
  
  findAll():Observable<Cabo[]>{
    return this.http.get<Cabo[]>(this.recurso)
  }

  salvar(ativo: Cabo): Observable<Cabo>{
    return this.http.post<Cabo>(this.recurso, ativo);
  }

  mensagem(msg: string){
    this._snackBar.open(msg,"Fechar",{
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000
    });
  }
 
}
