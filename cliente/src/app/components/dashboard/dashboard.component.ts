import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productos: any=[];
    constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getCountProductos();
 }

   //Obtener Productos
   getCountProductos(){
    this.dashboardService.CountProductos().subscribe(
      res =>{
        this.productos;
        console.log(res);
      },
      err=> console.error(err)      
    );
  }
}
