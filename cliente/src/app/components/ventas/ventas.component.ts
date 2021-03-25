import { Component, OnInit } from '@angular/core';

import{ VentasService } from '../../services/ventas.service';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  ventas: any=[];
  constructor(private ventasService: VentasService) { }

  ngOnInit(): void {
    this.getVentas();
  }
     //Obtener ventas
     getVentas(){
      this.ventasService.getVentas().subscribe(
        res => {
          this.ventas= res;
          console.log(res);
        },
        err => console.error(err)
      );
    }

  //Eliminar venta
  deleteVentas(id: string){
    //Crear mensaje de eliminar
    alert('Seguro desea eliminar');
    this.ventasService.deleteVenta(id).subscribe(
      res => {
        console.log(res);
        this.getVentas();
      },
      err => console.log(err)
    )
    console.log(id);
  }

}
