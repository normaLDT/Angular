import { Component, computed, EventEmitter, Input, input, output, Output} from '@angular/core';

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
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) nombre!: string;

  @Output() seleccion = new EventEmitter<string>();
  // seleccion = output<string>();

  // avatar = input.required<string>();
  // nombre = input.required<string>();

  get rutaImagen(){
    return '/' + this.avatar;
  }

  // rutaImagen = computed(()=>{
  //   return '/' + this.avatar;
  // })

  alSeleccionarUsuario(){
    this.seleccion.emit(this.id);
  }
}
