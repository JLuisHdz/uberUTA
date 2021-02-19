import { Component, OnInit } from '@angular/core';
import { SconductorService } from './sconductor.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class CONDUCTORComponent implements OnInit {
  login = {
    email:null,
    password:null
  }
  constructor(private sconductor: SconductorService) { }
 
  ngOnInit(): void {
  }
  loginUsuario(){
    this.sconductor.loginUsuario(this.login).subscribe( datos=> {
        if(datos['resultado']=='OK') {
          alert(datos['mensaje']);
        }else{
          alert(datos['mensaje']);
        }
      })
    }

}
