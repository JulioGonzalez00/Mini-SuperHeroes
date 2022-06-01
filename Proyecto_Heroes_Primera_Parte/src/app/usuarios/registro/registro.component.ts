import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario!: Usuario

  constructor(private usuarioService: UsuariosService) {}

  ngOnInit() {
    this.usuario = this.usuarioService.nuevoUsuario()
  }

  nuevoUsuario(): void {
    this.usuarioService.agregarUsuario(this.usuario)
    this.usuario = this.usuarioService.nuevoUsuario()
  }
  

}
