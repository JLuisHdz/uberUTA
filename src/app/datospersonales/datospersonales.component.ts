import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css']
})
export class DatospersonalesComponent implements OnInit {
nombre : string;
telefono : string;
foto : string;
rfc_curp : string;
  constructor() { }

  ngOnInit(): void {
  }
registrardatos()
{
  
}
}
