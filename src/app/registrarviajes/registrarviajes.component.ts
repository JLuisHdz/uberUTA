import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarviajes',
  templateUrl: './registrarviajes.component.html',
  styleUrls: ['./registrarviajes.component.css']
})
export class RegistrarviajesComponent implements OnInit {
origen:string;
destino:string;
fecha: string;
hora:string;
  constructor() { }

  ngOnInit(): void {
  }
registrarviaje(){
  
}
}
