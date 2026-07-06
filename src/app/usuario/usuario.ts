import { Component, computed, EventEmitter, Input, input, output, Output} from '@angular/core';

import { USUARIOS_FALSOS } from '../usuarios-falsos';
import { required } from '@angular/forms/signals';

const indiceAleatorio = Math.floor(Math.random()*USUARIOS_FALSOS.length);

import { type User } from './usuario.model';

// type User = {
//   id: string,
//     avatar:string,
//     nombre: string
// }

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})

export class Usuario {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) nombre!: string;

  @Input({required:true}) seleccionado!: boolean;

  @Input({required:true}) usuario!: User;

  @Output() seleccion = new EventEmitter<string>();
  // seleccion = output<string>();

  // avatar = input.required<string>();
  // nombre = input.required<string>();

  get rutaImagen(){
    return '/' + this.usuario.avatar;
  }

  // rutaImagen = computed(()=>{
  //   return '/' + this.avatar;
  // })

  alSeleccionarUsuario(){
    this.seleccion.emit(this.usuario.id);
  }
}
