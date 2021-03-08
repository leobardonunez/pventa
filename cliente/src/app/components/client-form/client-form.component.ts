import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import{ ActivatedRoute, Router} from '@angular/router';

import { ClientesService } from '../../services/clientes.service';
@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  //La tarjeta del formulario tenga las clases de bootstrap
  @HostBinding('class') classes= 'row';

  cliente: Cliente = {
    id: 0,
    nombre: '',
    telefono: '',
    correo: '',
    direccion: '',
    created_at: new Date()
  };

  //Si esta en falso significa que quiere guardar un nuevo cliente y si esta en verdadero significa que quiere actualizar un cliente
  edit: boolean = false;
  
  
  constructor(private clientesService: ClientesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params=this.activatedRoute.snapshot.params;
    if (params.id){
      this.clientesService.getCliente(params.id)
      .subscribe(
        res =>{
          console.log(res); 
          this.cliente = res;
          this.edit= true;
        },
        err => console.error(err)
      )
    }
    console.log(params);
  }

  //Guardar
  saveNewCliente(){
    delete this.cliente.created_at;
    delete this.cliente.id;
    this.clientesService.saveCliente(this.cliente)
    .subscribe(
      res => {
        console.log(res);
        //Guarda y redirecciona a clientes
        this.router.navigate(['/clientes']);
      },
      err => console.error(err)
    )
    console.log(this.cliente);
    console.log("boton funciona");
  }

  //Actualizar
  updateCliente(){
    delete this.cliente.created_at;
    //String(this.cliente.id) convierte a string para poder usar en updateCliente() de clientes.service
    this.clientesService.updateCliente(String(this.cliente.id) ,this.cliente)
    .subscribe(
      res => {
          console.log(res);
          this.router.navigate(['/clientes']);
      },
      err => console.log(err)
    )
    console.log(this.cliente);
  }

}
