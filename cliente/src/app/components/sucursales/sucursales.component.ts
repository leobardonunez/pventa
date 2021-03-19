import { Component, OnInit } from '@angular/core';

import { SucursalesService } from '../../services/sucursales.service';
@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  sucursales: any=[];

  constructor(private sucursalesService: SucursalesService) { }

  ngOnInit(): void {
    this.getSucursales();
  }

    //Obtener sucursales
    getSucursales(){
      this.sucursalesService.getSucursales().subscribe(
        res => {
          this.sucursales= res;
        },
        err => console.error(err)
      );
    }

  //Eliminar sucursal
  deleteSucursal(id: string){
    //Crear mensaje de eliminar
    alert('Seguro desea eliminar');
    this.sucursalesService.deleteSucursal(id).subscribe(
      res => {
        console.log(res);
        this.getSucursales();
      },
      err => console.log(err)
    )
    console.log(id);
  }

  //Actualizar sucursal
  

}
