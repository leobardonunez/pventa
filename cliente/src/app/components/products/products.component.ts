import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productos: any=[];

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.getProductos();
  }

  //Obtener Productos
  getProductos(){
    this.productosService.getProductos().subscribe(
      res =>{
        this.productos= res;
      },
      err=> console.error(err)      
    );
  }

  //Eliminar Producto
  deleteProducto(id: string){
    alert('Seguro que desea eliminar?');
    this.productosService.deleteProducto(id).subscribe(
      res=>{
        console.log(res);
        this.getProductos();
      },
      err=> console.error(err)
    )
    console.log(id);
  }

}
