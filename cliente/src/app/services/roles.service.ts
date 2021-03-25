import { Injectable } from '@angular/core';

//Para poder solicitar datos
import { HttpClient } from '@angular/common/http';

//Modelo de datos
import { Producto } from '../models/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RolesService {
  //cambiar
  API_URI= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  //Obtener roles
  getRoles(){
    return this.http.get(`${this.API_URI}/roles`);
  }
  //Obtener un role
  getRole(id: string){
    return this.http.get(`${this.API_URI}/roles/${id}`);
}
}
