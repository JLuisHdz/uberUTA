import { Component, OnInit } from '@angular/core';
import { SadminService } from './sadmin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class ADMINComponent implements OnInit {
  usuario = null;
  sesion= false;
  user={
    email: null,
    password: null,
    tipo: null
  }
  login = {
    email:null,
    password:null
  }
  constructor(private sadmin: SadminService) { }

  ngOnInit(): void {
  }

  recuperarUsuario(){
    this.sadmin.recuperarUsuario().subscribe(result => this.usuario = result);
  }

  alta(){
    this.sadmin.alta(this.user).subscribe(datos =>{
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarUsuario();
      }
    })
  }

  loginUsuario(){
    this.sadmin.loginUsuario(this.login).subscribe( datos=> {
        if(datos['resultado']=='OK') {
          alert(datos['mensaje']);
        }else{
          alert(datos['mensaje']);
        }
      })
    }

}
