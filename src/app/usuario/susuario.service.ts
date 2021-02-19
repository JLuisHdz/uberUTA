import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
})
export class SusuarioService {
  url='http://localhost';

  constructor(private http: HttpClient) { }

  recuperarUsuario(){
    return this.http.get(`${this.url}/RecuperarUsuarios.php`);
  }

  alta(usuario) {
    console.log(usuario); 
    return this.http.post(`${this.url}/Altausuario.php`, JSON.stringify(usuario));    
  }

  loginUsuario(login){
    return this.http.post(`${this.url}/Login.php`, JSON.stringify(login));
  }
  

}
