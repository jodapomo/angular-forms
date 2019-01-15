import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  usuario: any = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false,
  };

  paises = [{
      codigo: 'COL',
      nombre: 'Colombia'
    },
    {
      codigo: 'CRI',
      nombre: 'Costa Rica'
    },
    {
      codigo: 'ESP',
      nombre: 'España'
    }
  ];

  sexos: string[] = ['Hombre', 'Mujer', 'Otro'];

  constructor() { }


  guardar(forma: NgForm) {
    console.log('Formulario posteado');
    console.log('ngForm: ', forma);
    console.log('Valor forma: ', forma.value);

    console.log('Usuario', this.usuario);
  }

}
