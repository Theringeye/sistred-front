import { CabosService } from './../cabos.service';
import { Historico } from 'src/app/shared/model/historico';
import { MatTableDataSource } from "@angular/material/table";
import { Component, OnInit } from '@angular/core';
import { Cabo } from '../cabo';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-historico-cabo',
  templateUrl: './historico-cabo.component.html',
  styleUrls: ['./historico-cabo.component.css']
})
export class HistoricoCaboComponent implements OnInit {

  dataSource: MatTableDataSource<Historico>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }



}
