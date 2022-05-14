import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  usuarios: Usuario[] = []

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarios = this.usuarioService.getUsuarios()
  }

}
