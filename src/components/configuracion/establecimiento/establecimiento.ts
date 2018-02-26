import { Component } from '@angular/core';

/**
 * Generated class for the EstablecimientoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'establecimiento',
  templateUrl: 'establecimiento.html'
})
export class EstablecimientoComponent {

  text: string;

  constructor() {
    console.log('Hello EstablecimientoComponent Component');
    this.text = 'Hello World';
  }

}
