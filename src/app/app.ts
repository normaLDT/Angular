import { Component, signal } from '@angular/core';


import { USUARIOS_FALSOS } from './usuarios-falsos';

// import { NgFor } from '@angular/common';
// import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  // imports: [EncabezadoComponent, Usuario, Tareas, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:false,
  
})
export class App {
  protected readonly title = signal('my-app');

  usuarios = USUARIOS_FALSOS;

  idUsuarioSeleccionado?: string;

  get usuarioSeleccionado(){
    return this.usuarios.find((usuario)=>usuario.id===this.idUsuarioSeleccionado)!;
  }

  alSeleccionarUsuario(id: string){
    this.idUsuarioSeleccionado = id;
  }
}
