import { Component, OnInit } from '@angular/core';

import{ EntradasService } from '../../services/entradas.service';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  entradas: any=[];

  constructor( private entradasService: EntradasService) { }

  ngOnInit(){
    this.getEntradas();
  }

   //Obtener clientes
   getEntradas(){
    this.entradasService.getEntradas().subscribe(
      res => {
        this.entradas= res;
      },
      err => console.error(err)
    );
  }

  //Eliminar cliente
  deleteEntrada(id: string){
    //Crear mensaje de eliminar
    alert('Seguro desea eliminar');
    this.entradasService.deleteEntrada(id).subscribe(
      res => {
        console.log(res);
        this.getEntradas();
      },
      err => console.log(err)
    )
    console.log(id);
  }

  //Actualizar cliente

}
