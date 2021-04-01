import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../../models/usuarios';
import{ ActivatedRoute, Router} from '@angular/router';


import { UsuariosService } from '../../services/usuarios.service';




@Component({
  selector: 'app-trabajadores-show',
  templateUrl: './trabajadores-show.component.html',
  styleUrls: ['./trabajadores-show.component.css']
})
export class TrabajadoresShowComponent implements OnInit {

    //La tarjeta del formulario tenga las clases de bootstrap
    @HostBinding('class') classes= 'row';

    usuarios: Usuarios = {
      id: 0,
      imagen: '',
      nombre: '',
      usuario: '',
      pass: '',
      estado: true,
      rol: 0,
      created_at: new Date()
    };

  //Si esta en falso significa que quiere guardar una nueva usuariosy si esta en verdadero significa que quiere actualizar una usuario
  edit: boolean = false;

  constructor(private usuariosService: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const params=this.activatedRoute.snapshot.params;
    if (params.id){
      this.usuariosService.getUsuario(params.id)
      .subscribe(
        res =>{
          console.log(res); 
          this.usuarios = res;
          this.edit= true;
        },
        err => console.error(err)
      )
    }
    console.log(params);
  }

}
