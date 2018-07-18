import { Component, Input } from '@angular/core';
import { DTOItemhabitacion } from '../../modelos/DTOhabitacion';

/**
 * Generated class for the HabitacionesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'habitaciones',
  templateUrl: 'habitaciones.html'
})
export class HabitacionesComponent {

  @Input() Habitaciones : Array<DTOItemhabitacion>;
  text: string;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'superman', 'spiderman', 'ironman'];

  constructor() {
    console.log('Hello HabitacionesComponent Component');
    this.text = 'Hello World';
  }
}
