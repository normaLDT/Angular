import { Component, Input } from '@angular/core';

import { type Homework } from './tarea.model'; 

@Component({
  selector: 'app-tarea',
  imports: [],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class Tarea {
  @Input({required: true}) tarea!: Homework;

}
