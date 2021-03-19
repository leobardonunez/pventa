import { Injectable } from '@angular/core';

//Para poder solicitar datos
import { HttpClient } from '@angular/common/http';


//Modelo de datos
import { Sucursal } from '../models/sucursal';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

   //cambiar
   API_URI= 'http://localhost:3000';
   constructor(private http: HttpClient) { }
 
   getSucursales(){
     return this.http.get(`${this.API_URI}/sucursales`);
   }
   getSucursal(id: string){
     return this.http.get(`${this.API_URI}/sucursales/${id}`);
 }
 
 deleteSucursal(id : string){
   return this.http.delete(`${this.API_URI}/sucursales/${id}`);
 }
 
 saveSucursal(sucursal: Sucursal){
   return this.http.post(`${this.API_URI}/sucursales`, sucursal);
 }
 //id: string|number  "El id puede ser de tipo string o de tipo number"
 updateSucursal(id: string|number, updatedProducto: Sucursal): Observable<Sucursal>{
   return this.http.put(`${this.API_URI}/sucursales/${id}`, updatedProducto);
 }

}
