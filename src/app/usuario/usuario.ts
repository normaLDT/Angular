import { Component } from '@angular/core';

import { USUARIOS_FALSOS } from '../usuarios-falsos';

const indiceAleatorio = Math.floor(Math.random()*USUARIOS_FALSOS.length);


@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})

export class Usuario {

  usuarioSeleccionado = USUARIOS_FALSOS[indiceAleatorio];
  get rutaImagen(){
    return '/' + this.usuarioSeleccionado.avatar;
  }

  alSeleccionarUsuario(){
    const indiceAleatorio = Math.floor(Math.random()*USUARIOS_FALSOS.length);
    this.usuarioSeleccionado = USUARIOS_FALSOS[indiceAleatorio];
  }
}
