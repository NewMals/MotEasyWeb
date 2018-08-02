import { Component, Input } from '@angular/core';
import { DTOHabitacionItem } from '../../../modelos/DTOhabitacion';

/**
 * Generated class for the HabitacionesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'habitacion',
  templateUrl: 'habitacion.html'
})
export class HabitacionComponent {

  @Input() Habitacion: DTOHabitacionItem;
  text: string;
  cronometro;
  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'superman', 'spiderman', 'ironman'];

  constructor() {
    console.log('Hello HabitacionesComponent Component');
    this.text = 'Hello World';
  }

  carga() {
    let contador_s = 5;
    let contador_m = 0;
    let contador_h = 1;
    let segundos = document.getElementById("segundos_" + this.Habitacion.HITid);
    let minutos = document.getElementById("minutos_" + this.Habitacion.HITid);
    let horas = document.getElementById("horas_" + this.Habitacion.HITid);

    horas.innerText = contador_h.toString();
    minutos.innerText = contador_m.toString();

    this.cronometro = setInterval(() => {
      if (contador_s <= 0) {

        contador_s = 60;
        if (contador_m == 0 && contador_h == 0) {
          clearInterval(this.cronometro);
          return;
        } else if (contador_m <= 0) {
          contador_m = 60;
          contador_h--;
          horas.innerText = contador_h.toString();
        }
        contador_m--;
        minutos.innerText = contador_m.toString();
        
      }
      contador_s--;
      segundos.innerText = contador_s.toString();
      
    }, 1000);
  }

}

