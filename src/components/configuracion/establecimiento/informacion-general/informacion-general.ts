import { Component } from '@angular/core';

/**
 * Generated class for the InformaconGeneralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'informacion-general',
  templateUrl: 'informacion-general.html'
})
export class InformacionGeneralComponent {

  text: string;

  constructor() {
    console.log('Hello InformacionGeneralComponent Component');
    this.text = 'Hello World';
  }

}
