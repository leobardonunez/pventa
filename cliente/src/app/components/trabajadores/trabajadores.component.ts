import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service'


@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {

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

}
