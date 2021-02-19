import { Component, OnInit } from '@angular/core';
import { SusuarioService } from './susuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class USUARIOComponent implements OnInit {
  
  usuario = null;
  
  user={
    email: null,
    password: null
  }
  login = {
    email:null,
    password:null
  }
  
  constructor(private SusuarioService: SusuarioService) { }

 
  ngOnInit() {
    
  }
  recuperarUsuario(){
    this.SusuarioService.recuperarUsuario().subscribe(result => this.usuario = result);
  }

  alta(){
    this.SusuarioService.alta(this.user).subscribe(datos =>{
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarUsuario();
      }
    })
  }

  loginUsuario(){
    this.SusuarioService.loginUsuario(this.login).subscribe( datos=> {
        if(datos['resultado']=='OK') {
          alert(datos['mensaje']);
        }else{
          alert(datos['mensaje']);
        }
      })
    }
  }





