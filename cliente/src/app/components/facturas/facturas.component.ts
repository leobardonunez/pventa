import { Component, OnInit } from '@angular/core';

import { FacturasService } from '../../services/facturas.service';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturas: any=[];


  constructor(private facturasService: FacturasService) { }

  ngOnInit(): void {
    this.getFacturas();
  }

    //Obtener Facturas
    getFacturas(){
      this.facturasService.getFacturas().subscribe(
        res =>{
          this.facturas= res;
        },
        err=> console.error(err)      
      );
    }

  //Eliminar Facturas
  deleteFactura(id: string){
    alert('Seguro que desea eliminar?');
    this.facturasService.deleteFactura(id).subscribe(
      res=>{
        console.log(res);
        this.getFacturas();
      },
      err=> console.error(err)
    )
    console.log(id);
  }

}
