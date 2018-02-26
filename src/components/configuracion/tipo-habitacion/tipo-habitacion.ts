import { Component } from '@angular/core';

/**
 * Generated class for the TipoHabitacionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tipo-habitacion',
  templateUrl: 'tipo-habitacion.html'
})
export class TipoHabitacionComponent {

  text: string;

  constructor() {
    console.log('Hello TipoHabitacionComponent Component');
    this.text = 'Hello World';
  }

}
