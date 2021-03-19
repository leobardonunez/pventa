import { Component,HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import{ Sucursal } from 'src/app/models/sucursal';
import{ ActivatedRoute, Router} from '@angular/router';

import{ SucursalesService } from '../../services/sucursales.service';
@Component({
  selector: 'app-sucursales-form',
  templateUrl: './sucursales-form.component.html',
  styleUrls: ['./sucursales-form.component.css']
})
export class SucursalesFormComponent implements OnInit {
  //La tarjeta del formulario tenga las clases de bootstrap
  @HostBinding('class') classes= 'row';

  sucursal: Sucursal = {
    id: 0,
    sucursal: '',
    estado: true,    
    created_at: new Date()
  };

  //Si esta en falso significa que quiere guardar un nuevo sucursal y si esta en verdadero significa que quiere actualizar un sucursal
  edit: boolean = false;

  constructor(private sucursalService: SucursalesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const params=this.activatedRoute.snapshot.params;
    if (params.id){
      this.sucursalService.getSucursal(params.id)
      .subscribe(
        res =>{
          console.log(res); 
          this.sucursal = res;
          this.edit= true;
        },
        err => console.error(err)
      )
    }
    console.log(params);
  }

   //Guardar
   saveNewSucursal(){
    delete this.sucursal.created_at;
    delete this.sucursal.id;
    this.sucursalService.saveSucursal(this.sucursal)
    .subscribe(
      res => {
        console.log(res);
        //Guarda y redirecciona a sucursales
        this.router.navigate(['/sucursales']);
      },
      err => console.error(err)
    )
    console.log(this.sucursal);
    console.log("boton funciona");
  }

    //Actualizar
    updateSucursal(){
      delete this.sucursal.created_at;
      //String(this.sucursal.id) convierte a string para poder usar en updateSucursal() de sucursal.service
      this.sucursalService.updateSucursal(String(this.sucursal.id) ,this.sucursal)
      .subscribe(
        res => {
            console.log(res);
            this.router.navigate(['/sucursales']);
        },
        err => console.log(err)
      )
      console.log(this.sucursal);
    }

}
