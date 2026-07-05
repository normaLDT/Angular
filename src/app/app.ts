import { Component, signal } from '@angular/core';

import { EncabezadoComponent } from './encabezado/encabezado.component';
import { Usuario } from "./usuario/usuario";
import { USUARIOS_FALSOS } from './usuarios-falsos';
import { Tareas } from "./tareas/tareas";

@Component({
  selector: 'app-root',
  imports: [EncabezadoComponent, Usuario, Tareas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
  usuarios = USUARIOS_FALSOS;
  idUsuarioSeleccionado = 'u1';

  get usuarioSeleccionado(){
    return this.usuarios.find((usuario)=>usuario.id===this.idUsuarioSeleccionado)!;

  }

  alSeleccionarUsuario(id: string){
    this.idUsuarioSeleccionado = id;
  }

}
