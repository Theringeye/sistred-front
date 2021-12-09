import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CabosService {
  URI:string = "http://localhost:8080/cabo";
  constructor(private http: HttpClient) {}

  listarCabos() {
    this.http.get(this.URI).subscribe((data) => {
      console.log(data);
    });
  }
}
