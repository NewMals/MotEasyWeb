import { Component } from '@angular/core';

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

  text: string;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'superman', 'spiderman', 'ironman'];

  constructor() {
    console.log('Hello HabitacionesComponent Component');
    this.text = 'Hello World';
  }

}
