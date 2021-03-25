import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../../models/usuarios';
import{ ActivatedRoute, Router} from '@angular/router';


import { UsuariosService } from '../../services/usuarios.service';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {
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
  
  //Guarda ROLES
  roles: any=[];

  //Si esta en falso significa que quiere guardar una nueva usuariosy si esta en verdadero significa que quiere actualizar una usuario
  edit: boolean = false;

  constructor(private usuariosService: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute , private rolesService: RolesService) { }

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
    this.getroles();
    
  }

  //Obtiene roles
  getroles(){
    this.rolesService.getRoles().subscribe(
      res=> {
        this.roles= res;
        console.log(res);
      },
      err=> console.error(err)
    );
  }


      //Guardar
      saveNewUsuario(){
        delete this.usuarios.created_at;
        delete this.usuarios.id;
        this.usuariosService.saveUsuarios(this.usuarios)
        .subscribe(
          res => {
            console.log(res);
            //Guarda y redirecciona a usuarios
            this.router.navigate(['/usuarios']);            
          },
          err => console.error(err)
        )
        console.log(this.usuarios);
        console.log("boton funciona");
      }

  //Actualizar
  updateUsuario(){
    delete this.usuarios.created_at;
    //String(this.usuarios.id) convierte a string para poder usar en updateUsuarios() de usuarios.service
    this.usuariosService.updateUsuarios(String(this.usuarios.id) ,this.usuarios)
    .subscribe(
      res => {
          console.log(res);
          this.router.navigate(['/usuarios']);
      },
      err => console.log(err)
    )
    console.log(this.usuarios);
  }

}
