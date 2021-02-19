import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitarviaje',
  templateUrl: './solicitarviaje.component.html',
  styleUrls: ['./solicitarviaje.component.css']
})
export class SolicitarviajeComponent implements OnInit {
  origen:string;
  destino:string;
  fecha: string;
  hora:string;
  constructor() { }

  ngOnInit(): void {
  }
solicitarviaje(){
  
}
}
