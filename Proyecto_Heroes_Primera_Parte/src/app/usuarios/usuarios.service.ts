import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from './usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios: Usuario[] = []

  constructor() {
    this.usuarios = JSON.parse(localStorage.getItem('Registros') || '[]')
  }

  getUsuarios() {
    return this.usuarios
  }

  agregarUsuario(usuario: Usuario) {
    if(usuario.nombre != '' && usuario.correo != '' && usuario.fechaNacimiento != '' && usuario.sexo != '') {
      this.usuarios.push(usuario)
      localStorage.setItem('Registros', JSON.stringify(this.usuarios))
      Swal.fire("Todo fue un éxito!!!", "Ya estas registrado", "success")
    } else {
      Swal.fire("Hubo un problema!!!", "Debes llenar todos los campos!", "error")
    }
  }

  nuevoUsuario(): Usuario {
    return {
      nombre: "",
      sexo: "",
      correo: "",
      fechaNacimiento: ""
    }
  }
}
