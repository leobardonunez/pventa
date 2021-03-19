import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrada } from 'src/app/models/entradas';
import{ ActivatedRoute, Router} from '@angular/router';

import { EntradasService } from '../../services/entradas.service';
import{ Producto } from '../../models/product'
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-entradas-form',
  templateUrl: './entradas-form.component.html',
  styleUrls: ['./entradas-form.component.css']
})
export class EntradasFormComponent implements OnInit {
    //La tarjeta del formulario tenga las clases de bootstrap
    @HostBinding('class') classes= 'row';

    entrada: Entrada = {
      id: 0,
      producto: 0,
      stock: 0,     
      created_at: new Date()
    };

  //Guarda productos
  productos: any=[];

    
  //Si esta en falso significa que quiere guardar una nueva entrada y si esta en verdadero significa que quiere actualizar una entrada
  edit: boolean = false;
  

  constructor(private entradasService: EntradasService, private router: Router, private activatedRoute: ActivatedRoute ,private productsService: ProductosService) { }
 
 
  ngOnInit(): void {
    const params=this.activatedRoute.snapshot.params;
    if (params.id){
      this.entradasService.getEntrada(params.id)
      .subscribe(
        res =>{
          console.log(res); 
          this.entrada = res;
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
    saveNewEntrada(){
      delete this.entrada.created_at;
      delete this.entrada.id;
      this.entradasService.saveEntrada(this.entrada)
      .subscribe(
        res => {
          console.log(res);
          //Guarda y redirecciona a entradas
          this.router.navigate(['/entradas']);            
        },
        err => console.error(err)
      )
      console.log(this.entrada);
      console.log("boton funciona");
    }

  //Actualizar
  updateEntrada(){
    delete this.entrada.created_at;
    //String(this.entrada.id) convierte a string para poder usar en updateEntrada() de entradas.service
    this.entradasService.updateEntrada(String(this.entrada.id) ,this.entrada)
    .subscribe(
      res => {
          console.log(res);
          this.router.navigate(['/entradas']);
      },
      err => console.log(err)
    )
    console.log(this.entrada);
  }


}
