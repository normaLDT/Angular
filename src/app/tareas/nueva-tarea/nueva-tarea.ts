import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nueva-tarea',
  imports: [],
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css',
})
export class NuevaTarea {
  @Output() cancelar = new EventEmitter<void>();

  

  alCancelar(){
    this.cancelar.emit();

  }
}
