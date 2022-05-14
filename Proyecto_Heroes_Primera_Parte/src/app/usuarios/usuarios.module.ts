import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from './usuario.model';
import { RegistroComponent } from './registro/registro.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios.service';

@NgModule({
  declarations: [
    RegistroComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    UsuariosService
  ],
  exports: [
    RegistroComponent,
    ListadoComponent
  ]
})
export class UsuariosModule {}
