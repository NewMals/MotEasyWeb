import { Component, OnInit } from '@angular/core';
import { DTOHabitaciontipo } from '../../../../modelos/DTOhabitacion';
import { HabitacionTipoProvider } from '../../../../providers/general/habitacion-tipo';

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
export class RegistrarTipHabComponent implements OnInit {

  text: string;
  HabitacionTipo = new DTOHabitaciontipo;

  constructor(
    private TIHservice: HabitacionTipoProvider
  ) {
    console.log('Hello RegistarTipHabComponent Component');
    this.text = 'Hello World';
    //this.HabitacionTipo = obj ? obj : new DTOHabitaciontipo;
    // this.ArrayComplementos = [
    //   {COMid: "" , COMdescripcion: "Parqueadero"}]
  }

  ngOnInit(): void {
    this.HabitacionTipo = this.TIHservice.habitacionTipo;   
  }


  
}
