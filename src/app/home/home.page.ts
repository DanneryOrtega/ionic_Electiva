import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre = null;
  apellido = null;
  celular = null;
  email = null;

  usuarios = [];

  constructor() { }

  guardarDatos() {
    // Agregando datos a la base de datos en memoria
    this.usuarios.push({
      nombre: this.nombre,
      apellido: this.apellido
    })
    // Limpiando datos
    this.nombre = "";
    this.apellido = "";
  }

  editarDatos() {

  }

}
