import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import {App} from './app';
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { Usuario } from "./usuario/usuario";
import { Tareas } from "./tareas/tareas";
import { Tarjeta } from "./compartida/tarjeta/tarjeta";
import { Tarea } from "./tareas/tarea/tarea";
import { NuevaTarea } from "./tareas/nueva-tarea/nueva-tarea";

@NgModule({
    declarations: [App, EncabezadoComponent,Usuario, Tarjeta, Tareas, Tarea, NuevaTarea],
    bootstrap: [App],
    imports: [BrowserModule, FormsModule]
})
    
export class AppModule{
    
}