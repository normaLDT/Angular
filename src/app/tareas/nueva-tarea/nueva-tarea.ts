import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NuevaTareaInfo } from '../tarea/tarea.model';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-nueva-tarea',
  imports: [FormsModule],
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css',
})
export class NuevaTarea {
  @Input({ required: true }) idUsuario!: string;
  @Output() cerrar = new EventEmitter<void>();
  // @Output() agregar = new EventEmitter<NuevaTareaInfo>

  tituloIngresado = '';
  resumenIngresado= '';
  fechaIngresada = '';

  private tareasService = inject(TareasService);

  alCancelar(){
    this.cerrar.emit();

  }

  alEnviar(){
    this.tareasService.agregarTarea({
      titulo: this.tituloIngresado,
      resumen: this.resumenIngresado,
      fecha: this.fechaIngresada
    }, this.idUsuario)
    this.cerrar.emit();
  };

  
}
