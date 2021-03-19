import { Injectable } from '@angular/core';

//Para poder solicitar datos
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  //cambiar
  API_URI= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  //Count Productos
  CountProductos(){
   return this.http.get(`${this.API_URI}/dashboard`);
  }
}
