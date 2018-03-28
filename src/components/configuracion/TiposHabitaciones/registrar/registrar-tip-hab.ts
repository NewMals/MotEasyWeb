import { Component } from '@angular/core';
import { DTOcomplemento } from '../../../../modelos/DTOcomplemento';

/**
 * Generated class for the RegistarTipHabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'registrar-tip-hab',
  templateUrl: 'registrar-tip-hab.html'
})
export class RegistrarTipHabComponent {

  text: string;
  ArrayComplementos = new Array<DTOcomplemento>();

  constructor() {
    console.log('Hello RegistarTipHabComponent Component');
    this.text = 'Hello World';
    this.ArrayComplementos = [
      {COMid: "" , COMdescripcion: "Parqueadero"}]
  }

}
