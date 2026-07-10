import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { type Homework } from './tarea.model';
import { Tarjeta } from "../../compartida/tarjeta/tarjeta"; 
import { DatePipe } from '@angular/common';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tarea',
  imports: [Tarjeta, DatePipe],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class Tarea {
  @Input({required: true}) tarea!: Homework;
 
  private tareasService = inject(TareasService);

  alCompletarTarea(){
    this.tareasService.eliminarTarea(this.tarea.id);
     
  }

}
