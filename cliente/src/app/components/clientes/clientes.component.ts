import { Component, OnInit } from '@angular/core';

import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {
  
  clientes: any=[];
  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.getClientes();
  }
   
  //Obtener clientes
  getClientes(){
    this.clientesService.getClientes().subscribe(
      res => {
        this.clientes= res;
      },
      err => console.error(err)
    );
  }

  //Eliminar cliente
  deleteCliente(id: string){
    //Crear mensaje de eliminar
    alert('Seguro desea eliminar');
    this.clientesService.deleteCliente(id).subscribe(
      res => {
        console.log(res);
        this.getClientes();
      },
      err => console.log(err)
    )
    console.log(id);
  }

  //Actualizar cliente
  

}
