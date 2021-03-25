import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Ventas } from 'src/app/models/ventas';
import{ ActivatedRoute, Router} from '@angular/router';

import { VentasService } from '../../services/ventas.service';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-ventas-form',
  templateUrl: './ventas-form.component.html',
  styleUrls: ['./ventas-form.component.css']
})
export class VentasFormComponent implements OnInit {
  //La tarjeta del formulario tenga las clases de bootstrap
  @HostBinding('class') classes= 'row';

  
  ventas: Ventas = {
    id: 0,
    producto_venta: 0,
    cantidad: 0,
    cliente: '',
    subtotal: 0,
    iva: 0,
    descuento: 0,
    total: 0,        
    created_at: new Date()
  };


  //Guarda productos
  productos: any=[];

  //Si esta en falso significa que quiere guardar una nueva venta y si esta en verdadero significa que quiere actualizar una venta
  edit: boolean = false;


  constructor(private ventasService: VentasService, private router: Router, private activatedRoute: ActivatedRoute, private productsService: ProductosService) { }

  ngOnInit(): void {

    const params=this.activatedRoute.snapshot.params;
    if (params.id){
      this.ventasService.getVenta(params.id)
      .subscribe(
        res =>{
          console.log(res); 
          this.ventas = res;
          this.edit= true;
        },
        err => console.error(err)
      )
    }
    console.log(params);

    this.getproducts();
  }

  //Obtiene Productos
  getproducts(){
    this.productsService.getProductos().subscribe(
      res=> {
        this.productos= res;
        console.log(res);
      },
      err=> console.error(err)
    );
  }

      //Guardar
      saveNewVenta(){
        delete this.ventas.created_at;
        delete this.ventas.id;
        this.ventasService.saveVenta(this.ventas)
        .subscribe(
          res => {
            console.log(res);
            //Guarda y redirecciona a ventas
            this.router.navigate(['/ventas']);            
          },
          err => console.error(err)
        )
        console.log(this.ventas);
        console.log("boton funciona");
      }

      //Actualizar
      updateVenta(){
        delete this.ventas.created_at;
        //String(this.ventas.id) convierte a string para poder usar en updateVenta() de ventas.service
        this.ventasService.updateVenta(String(this.ventas.id) ,this.ventas)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/ventas']);
      },
      err => console.log(err)
    )
    console.log(this.ventas);
  }

}
