import { Injectable } from '@angular/core';

//Para poder solicitar datos
import { HttpClient } from '@angular/common/http';

//Modelo de datos
import{ Entrada } from '../models/entradas';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EntradasService {
  
  //cambiar
  API_URI= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getEntradas(){
    return this.http.get(`${this.API_URI}/entradas`);
  }
  getEntrada(id: string){
    return this.http.get(`${this.API_URI}/entradas/${id}`);
}

deleteEntrada(id : string){
  return this.http.delete(`${this.API_URI}/entradas/${id}`);
}

saveEntrada(entrada: Entrada){
  return this.http.post(`${this.API_URI}/entradas`, entrada);
}
//id: string|number  "El id puede ser de tipo string o de tipo number"
updateEntrada(id: string|number, updatedEntrada: Entrada): Observable<Entrada>{
  return this.http.put(`${this.API_URI}/entradas/${id}`, updatedEntrada);
}

}
