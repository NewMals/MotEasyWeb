import { Component } from '@angular/core';
import { DTOHabitacionItem, DTOHabitacionTipo } from '../../../modelos/DTOhabitacion';
import { HabitacionTipoProvider } from '../../../providers/general/habitacion-tipo';

/**
 * Generated class for the GenerarHabitacionesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'generar-habitaciones',
  templateUrl: 'generar-habitaciones.html'
})
export class GenerarHabitacionesComponent {

  text: string;
  HabitacionTipo = new DTOHabitacionTipo;

  constructor(private TIHservice: HabitacionTipoProvider) {
    console.log('Hello GenerarHabitacionesComponent Component');
    this.HabitacionTipo = this.TIHservice.habitacionTipo;
  }

  validarCantidad(){
    this.HabitacionTipo.HTIcantidad = (this.HabitacionTipo.HTIcantidad > 50 ) ? 50 : this.HabitacionTipo.HTIcantidad;
  }
  
  crearHabitaciones(cantidadHab: number): Array<DTOHabitacionItem> {
    let ArrayHabitaciones = new Array<DTOHabitacionItem>();
    for (let i = 1; i <= cantidadHab; i++) {
      let itemHabitacion = new DTOHabitacionItem;
      itemHabitacion.HITid = Math.random().toString(36).substring(2);
      itemHabitacion.HITestado = "Disponible";
      itemHabitacion.HITidentidad = i.toString();

      ArrayHabitaciones.push(itemHabitacion);
    }
    return ArrayHabitaciones;
  }

}
