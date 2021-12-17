import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cabo } from "./cabo";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class CabosService {
  recurso:string = environment.baseUrl.concat('cabo');
  cabos:Cabo[];
  
  constructor(private http: HttpClient) { }
  
  findAll():Observable<Cabo[]>{
    return this.http.get<Cabo[]>(this.recurso)
  }
 
}
