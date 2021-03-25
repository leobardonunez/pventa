import { Injectable } from '@angular/core';

//Para poder solicitar datos
import { HttpClient } from '@angular/common/http';

//Modelo de datos
import{ Usuarios } from '../models/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  //cambiar
  API_URI= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(`${this.API_URI}/usuarios`);
  }
  getUsuario(id: string){
    return this.http.get(`${this.API_URI}/usuarios/${id}`);
}

deleteUsuarios(id : string){
  return this.http.delete(`${this.API_URI}/usuarios/${id}`);
}

saveUsuarios(usuarios: Usuarios){
  return this.http.post(`${this.API_URI}/usuarios`, usuarios);
}

//id: string|number  "El id puede ser de tipo string o de tipo number"
updateUsuarios(id: string|number, updatedUsuario: Usuarios): Observable<Usuarios>{
  return this.http.put(`${this.API_URI}/usuarios/${id}`, updatedUsuario);
}
}
