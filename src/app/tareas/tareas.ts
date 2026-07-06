import { Component, Input } from '@angular/core';
import { Tarea } from "./tarea/tarea";

@Component({
  selector: 'app-tareas',
  imports: [Tarea],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  @Input({required:true}) idUsuario!: string;
  @Input({required:true}) nombre?: string;
  tareas = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'Aprender Angular',
      resumen: 'Aprender todas las caracteristicas basicas y avanzadas de Angular',
      expira: '2025-01-01'
    },
    {
    id: 't2',
    idUsuario: 'u3',
    titulo: 'Crear el primer prototipo',
    resumen: 'Crear el primer prototipo del sitio web de la tienda',
    expira: '2025-11-05',
    },
    {
    id: 't3',
    idUsuario: 'u3',
    titulo: 'Preparar la plantilla del carrito',
    resumen: 'Preparar y describir una plantilla de carrito de compras de la tienda online',
    expira: '2025-05-16',
    },
  ];

  get tareasUsuarioSeleccionado(){
    return this.tareas.filter((tarea) => tarea.idUsuario === this.idUsuario);
  }

}
