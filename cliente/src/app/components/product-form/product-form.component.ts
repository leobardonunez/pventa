import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/product';
import{ ActivatedRoute, Router} from '@angular/router';

import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
   //La tarjeta del formulario tenga las clases de bootstrap
   @HostBinding('class') classes= 'row';

   producto: Producto = {
    id: 0,
    imagen: '',
    codigo: 0,    
    nombre: '',
    iva: 0,
    estado: true,
    precio: 0,
    descripcion: '',
    created_at: new Date()     
  };
  //Si esta en falso significa que quiere guardar un nuevo producto y si esta en verdadero significa que quiere actualizar un producto
 edit: boolean = false;
  constructor(private productosService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params=this.activatedRoute.snapshot.params;
    if (params.id){
      this.productosService.getProducto(params.id)
      .subscribe(
        res =>{
          console.log(res); 
          this.producto = res;
          this.edit= true;
        },
        err => console.error(err)
      )
    }
    console.log(params);
  }

  //Guardar
  saveNewProducto(){
    delete this.producto.created_at;
    delete this.producto.id;
    this.productosService.saveProducto(this.producto)
    .subscribe(
      res => {
        console.log(res);
        //Guarda y redirecciona a clientes
        this.router.navigate(['/products']);        
      },
      err => console.error(err)
    )
    console.log(this.producto);
    console.log("boton funciona");
  }

    //Actualizar
    updateProducto(){
      delete this.producto.created_at;
      //String(this.product.id) convierte a string para poder usar en updateProducto() de clientes.service
      this.productosService.updateProducto(String(this.producto.id) ,this.producto)
      .subscribe(
        res => {
            console.log(res);
            this.router.navigate(['/products']);
        },
        err => console.log(err)
      )
      console.log(this.producto);
    }

}
