import { Component, signal } from '@angular/core';

import { EncabezadoComponent } from './encabezado/encabezado.component';
import { Usuario } from "./usuario/usuario";

@Component({
  selector: 'app-root',
  imports: [EncabezadoComponent, Usuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
