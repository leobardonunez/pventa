import { Injectable } from '@angular/core';

//Para poder solicitar datos
import { HttpClient } from '@angular/common/http';

//Modelo de datos
import{ Ventas } from '../models/ventas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  
  //cambiar
  API_URI= 'http://localhost:3000';
  constructor( private http: HttpClient) { }


  getVentas(){
    return this.http.get(`${this.API_URI}/ventas`);
  }
  getVenta(id: string){
    return this.http.get(`${this.API_URI}/ventas/${id}`);
}

deleteVenta(id : string){
  return this.http.delete(`${this.API_URI}/ventas/${id}`);
}

saveVenta(venta: Ventas){
  return this.http.post(`${this.API_URI}/ventas`, venta);
}
//id: string|number  "El id puede ser de tipo string o de tipo number"
updateVenta(id: string|number, updatedVenta: Ventas): Observable<Ventas>{
  return this.http.put(`${this.API_URI}/ventas/${id}`, updatedVenta);
}

}
