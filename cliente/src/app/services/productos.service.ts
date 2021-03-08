import { Injectable } from '@angular/core';

//Para poder solicitar datos
import { HttpClient } from '@angular/common/http';


//Modelo de datos
import { Producto } from '../models/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //cambiar
  API_URI= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(`${this.API_URI}/products`);
  }
  getProducto(id: string){
    return this.http.get(`${this.API_URI}/products/${id}`);
}

deleteProducto(id : string){
  return this.http.delete(`${this.API_URI}/products/${id}`);
}

saveProducto(producto: Producto){
  return this.http.post(`${this.API_URI}/products`, producto);
}
//id: string|number  "El id puede ser de tipo string o de tipo number"
updateProducto(id: string|number, updatedProducto: Producto): Observable<Producto>{
  return this.http.put(`${this.API_URI}/products/${id}`, updatedProducto);
}

}
