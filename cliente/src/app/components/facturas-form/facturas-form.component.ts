import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { Facturas } from 'src/app/models/facturas';
import{ ActivatedRoute, Router} from '@angular/router';

import { FacturasService } from '../../services/facturas.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-facturas-form',
  templateUrl: './facturas-form.component.html',
  styleUrls: ['./facturas-form.component.css']
})
export class FacturasFormComponent implements OnInit {
   //La tarjeta del formulario tenga las clases de bootstrap
   @HostBinding('class') classes= 'row';

   
   factura: Facturas = {
    id: 0,
    num_fact: 0,
    emisor: 0,
    receptor: 0,
    producto: 0,
    cantidad: 0,
    subt: 0,
    tot: 0,
    metodo_pago: '',
    created_at: new Date()     
  };

  //Guarda productos
  productos: any=[];
  //Si esta en falso significa que quiere guardar un nuevo producto y si esta en verdadero significa que quiere actualizar una factura
  edit: boolean = false;

  constructor(private facturasService: FacturasService ,private productosService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params=this.activatedRoute.snapshot.params;
    if (params.id){
      this.facturasService.getFactura(params.id)
      .subscribe(
        res =>{
          console.log(res); 
          this.factura = res;
          this.edit= true;
        },
        err => console.error(err)
      )
    }
    console.log(params);
  }

  //Obtiene emisor de factura
  getproducto(){
    this.productosService.getProductos().subscribe(
      res=>{
        this.productos=res;
      },
      err=> console.error(err)
    );
  }

  //Guardar
  saveNewFactura(){
    delete this.factura.created_at;
    delete this.factura.id;
    this.facturasService.saveFactura(this.factura)
    .subscribe(
      res => {
        console.log(res);
        //Guarda y redirecciona a facturas
        this.router.navigate(['/facturas']);        
      },
      err => console.error(err)
    )
    console.log(this.factura);
    console.log("boton funciona");
  }

    //Actualizar
    updateFactura(){
      delete this.factura.created_at;
      //String(this.product.id) convierte a string para poder usar en updateFactura() de facturas.service
      this.facturasService.updateFactura(String(this.factura.id) ,this.factura)
      .subscribe(
        res => {
            console.log(res);
            this.router.navigate(['/facturas']);
        },
        err => console.log(err)
      )
      console.log(this.factura);
    }

}
