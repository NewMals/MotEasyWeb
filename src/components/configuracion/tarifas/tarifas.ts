import { Component } from '@angular/core';
import { DTOtarifa } from '../../../modelos/DTOtarifa';

/**
 * Generated class for the TarifasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tarifas',
  templateUrl: 'tarifas.html'
})
export class TarifasComponent {

  tarifa : DTOtarifa;
  text: string;

  constructor() {
    console.log('Hello TarifasComponent Component');
    this.text = 'Hello World';
    this.tarifa = new DTOtarifa;
    this.tarifa.TARcantHoras = 4;
    this.tarifa.TARvalor = 50000;
  }

  cambiarValor(){
    document.getElementById('lblValor').style.display = "none";
    document.getElementById('txtValor').style.display = "block";
    document.getElementById('txtValor').focus();
  }

  actualizarValor(){
    document.getElementById('txtValor').style.display = "none";
    document.getElementById('lblValor').style.display = "block";
  }
}
