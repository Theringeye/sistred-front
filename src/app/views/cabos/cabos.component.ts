import { Component, OnInit } from "@angular/core";
import { CabosService } from "./cabos.service";
import { MockCabos } from "./mock-cabos";

@Component({
  selector: "app-cabos",
  templateUrl: "./cabos.component.html",
  styleUrls: ["./cabos.component.css"],
})
export class CabosComponent implements OnInit {
  cabos = MockCabos;
  displayedColumns: string[] = ["id", "tipo", "fabricante", "mais"];
  dataSource = this.cabos;

  constructor(private cabosService: CabosService) {}

  ngOnInit(): void {}

  testeRequestGETApi() {
    this.cabosService.testeRequestGETApi();
  }

  testeRequestPOSTApi() {
    this.cabosService.testeRequestPOSTApi();
  }
}
