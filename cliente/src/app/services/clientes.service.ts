import { Injectable } from '@angular/core';

//Para poder solicitar datos
import { HttpClient } from '@angular/common/http';

//Modelo de datos
import {Cliente} from '../models/cliente';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  //cambiar
  API_URI= 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get(`${this.API_URI}/clientes`);
  }

  getCliente(id: string){
      return this.http.get(`${this.API_URI}/clientes/${id}`);
  }

  deleteCliente(id : string){
    return this.http.delete(`${this.API_URI}/clientes/${id}`);
  }

  saveCliente(cliente: Cliente){
    return this.http.post(`${this.API_URI}/clientes`, cliente);
  }
  //id: string|number  "El id puede ser de tipo string o de tipo number"
  updateCliente(id: string|number, updatedCliente: Cliente): Observable<Cliente>{
    return this.http.put(`${this.API_URI}/clientes/${id}`, updatedCliente);
  }
}
