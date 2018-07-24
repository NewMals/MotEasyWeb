import { Component, Input } from '@angular/core';
import { DTOItemhabitacion } from '../../../modelos/DTOhabitacion';

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

  @Input() Habitacion: DTOItemhabitacion;
  text: string;
  cronometro;
  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'superman', 'spiderman', 'ironman'];

  constructor() {
    console.log('Hello HabitacionesComponent Component');
    this.text = 'Hello World';
  }

  carga() {
    let contador_s = 10;
    let contador_m = 1;
    let contador_h = 2;
    let segundos = document.getElementById("segundos_" + this.Habitacion.HIHid);
    let minutos = document.getElementById("minutos_" + this.Habitacion.HIHid);
    let horas = document.getElementById("horas_" + this.Habitacion.HIHid);

    this.cronometro = setInterval(() => {
      if (contador_s < 0) {

        contador_s = 59;
        if (contador_m < 0 && contador_h == 0) {
          clearInterval(this.cronometro);
          return;
        } else if (contador_m < 0) {
          contador_m = 59;
          contador_h--;
          horas.innerText = contador_h.toString();
        }

        minutos.innerText = contador_m.toString();
        contador_m--;
      }

      segundos.innerText = contador_s.toString();
      contador_s--;
    }, 1000);
  }

}

