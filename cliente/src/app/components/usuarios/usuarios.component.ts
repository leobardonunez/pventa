import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  usuarios: any=[];
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

     //Obtener usuarios
     getUsuarios(){
      this.usuariosService.getUsuarios().subscribe(
        res => {
          this.usuarios= res;
          console.log(res);
        },
        err => console.error(err)
      );
    }

  //Eliminar usuario
  deleteUsuarios(id: string){
    //Crear mensaje de eliminar
    alert('Seguro desea eliminar');
    this.usuariosService.deleteUsuarios(id).subscribe(
      res => {
        console.log(res);
        this.getUsuarios();
      },
      err => console.log(err)
    )
    console.log(id);
  }

}
