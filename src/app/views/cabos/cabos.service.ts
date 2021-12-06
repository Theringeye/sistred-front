import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CabosService {
  constructor(private http: HttpClient) {}

  testeRequestGETApi() {
    console.log("passou pelo teste de requisição na camada se serviço");
    /*const result = await this.http
      .post("http://localhost:8080/login", usuario, { responseType: "text" })
      .toPromise();*/
    this.http.get("http://localhost:8080/movimentacao/1").subscribe((data) => {
      console.log(data);
    });
  }

  //passar o objeto que será salvo, por parâmetro. Esse objeto deve vir da classe ts COMPONENT
  async testeRequestPOSTApi() {
    /*const result = await this.http
      .post("http://localhost:8080/login", usuario, { responseType: "json" })
      .toPromise();
    
   });*/
  }
}
