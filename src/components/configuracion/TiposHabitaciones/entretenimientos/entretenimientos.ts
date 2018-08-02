import { Component, Input } from '@angular/core';
import { DTOHabitacionTipo } from '../../../../modelos/DTOhabitacion';

/**
 * Generated class for the EntretenimientosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'entretenimientos',
  templateUrl: 'entretenimientos.html'
})
export class EntretenimientosComponent {

  text: string;
  @Input() habitacion : DTOHabitacionTipo;

  constructor() {
    console.log('Hello EntretenimientosComponent Component');
    this.text = 'Hello World entretime';
  }

}
