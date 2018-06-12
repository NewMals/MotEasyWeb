import { Component, OnInit, OnDestroy } from '@angular/core';
import { DTOHabitaciontipo } from '../../../../modelos/DTOhabitacion';
import { HabitacionTipoProvider } from '../../../../providers/general/habitacion-tipo';
import { EstablecimientoProvider } from '../../../../providers/general/Establecimiento';

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
export class RegistrarTipHabComponent implements OnInit, OnDestroy {



  text: string;
  HabitacionTipo = new DTOHabitaciontipo;

  constructor(
    private HABservice: HabitacionTipoProvider
  ) {
    console.log('Hello RegistarTipHabComponent Component');
    this.text = 'Hello World';
    //this.HabitacionTipo = obj ? obj : new DTOHabitaciontipo;
    // this.ArrayComplementos = [
    //   {COMid: "" , COMdescripcion: "Parqueadero"}]
  }



  ngOnInit(): void {
    this.HabitacionTipo = this.HABservice.habitacionTipo;   
  }

  ngOnDestroy() : void{
    // this.HABservice.guardarBd();
  }
  
}
