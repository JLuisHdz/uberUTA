import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datosvehiculos',
  templateUrl: './datosvehiculos.component.html',
  styleUrls: ['./datosvehiculos.component.css']
})
export class DatosvehiculosComponent implements OnInit {
placas : string;
marca : string;
anio : Date;
color : string;
  constructor() { }

  ngOnInit(): void {
  }
registrarvehiculo(){
  
}
}
