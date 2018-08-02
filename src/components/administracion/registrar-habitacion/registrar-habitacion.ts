import { Component } from '@angular/core';

/**
 * Generated class for the RegistrarHabitacionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'registrar-habitacion',
  templateUrl: 'registrar-habitacion.html'
})
export class RegistrarHabitacionComponent {

  text: string;

  constructor() {
    console.log('Hello RegistrarHabitacionComponent Component');
    this.text = 'Hello World';
  }

}
