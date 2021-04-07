import { Injectable } from '@angular/core';

//Para poder solicitar datos
import { HttpClient } from '@angular/common/http';

//Modelo de datos
import { Facturas } from '../models/facturas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
//cambiar
API_URI= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  //Obtener facturas
  getFacturas(){
    return this.http.get(`${this.API_URI}/facturas`);
  }

  //Obtener un facturas
  getFactura(id: string){
    return this.http.get(`${this.API_URI}/facturas/${id}`);
}
//Eliminar facturas
deleteFactura(id : string){
  return this.http.delete(`${this.API_URI}/facturas/${id}`);
}
//Guardar facturas
saveFactura(facturas: Facturas){
  return this.http.post(`${this.API_URI}/facturas`, facturas);
}
//Actualizar factura
//id: string|number  "El id puede ser de tipo string o de tipo number"
updateFactura(id: string|number, updatedFactura: Facturas): Observable<Facturas>{
  return this.http.put(`${this.API_URI}/facturas/${id}`, updatedFactura);
}
}
