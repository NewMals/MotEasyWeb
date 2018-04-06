import { Component, OnInit } from '@angular/core';
import { DTOcomplemento } from '../../../../modelos/DTOcomplemento';
import { DTOHabitaciontipo } from '../../../../modelos/DTOhabitacion';

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
export class RegistrarTipHabComponent  {


  text: string;
  HabitacionTipo = new DTOHabitaciontipo;

  constructor() {
    console.log('Hello RegistarTipHabComponent Component');
    this.text = 'Hello World';
    // this.ArrayComplementos = [
    //   {COMid: "" , COMdescripcion: "Parqueadero"}]
  }
}
