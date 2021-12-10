import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cabo } from "./cabo";

@Injectable({
  providedIn: "root",
})
export class CabosService {
  URI:string = "http://localhost:8080/cabo";
  cabos:Cabo[];
  constructor(private http: HttpClient) {
   //this.cabos = this.listar();
    
  }
  listar(){
    return this.http.get<{cabos: Cabo}[]>(this.URI);
  }
  listarCabos() {
    this.http.get(this.URI).subscribe((data) => {
      console.log(data);
    });
  }
 
}
