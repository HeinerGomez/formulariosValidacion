import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  `]
})
export class TemplateComponent {

  usuario: Object = {
    'nombre': null,
    'apellido': null,
    'correo': null,
    'pais': '',
    'sexo': 'Hombre',
    'acepta': false
  };

  paises = [{
    'codigo': 'CRI',
    'nombre': 'Costa Rica'
  },
  {
    'codigo': 'ESP',
    'nombre': 'España'
  }];

  sexos: string[] = ['Hombre', 'Mujer', 'Sin definir'];

  constructor() { }

  guardar( forma: NgForm ) {
    console.log('NgForm ', forma);
    console.log('Valor Forma ', forma.value);
    console.log('Usuario ', this.usuario);
  }

}
