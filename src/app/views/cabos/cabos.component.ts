import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cabo } from "./cabo";
import { CabosService } from "./cabos.service";


@Component({
  selector: "app-cabos",
  templateUrl: "./cabos.component.html",
  styleUrls: ["./cabos.component.css"],
})
export class CabosComponent implements OnInit {
  dataSource: Cabo[] = [];
  displayedColumns: string[] = ["id", "tipo", "fabricante", "mais"];
  
  constructor(private cabosService: CabosService, private router:Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.cabosService.findAll().subscribe(resposta =>{
      this.dataSource = resposta;
      console.log(resposta);
    })
  }

  irParaFormCabo(){
    this.router.navigate(["form-cabo"]);
  }

  verMais(id: number){
    console.log(id);
  }
}
