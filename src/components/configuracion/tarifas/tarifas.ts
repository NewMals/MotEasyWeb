import { Component, OnInit, OnDestroy } from '@angular/core';
import { DTOtarifa } from '../../../modelos/DTOtarifa';
import { DTOHabitaciontipo } from '../../../modelos/DTOhabitacion';
import { HabitacionTipoProvider } from '../../../providers/general/habitacion-tipo';

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
export class TarifasComponent implements OnInit, OnDestroy {

  Arraytarifa = new Array<DTOtarifa>();
  text: string;

  constructor(
    private HABservice: HabitacionTipoProvider
  ) {
    console.log('Hello TarifasComponent Component');
    this.text = 'Hello World';

  }

  ngOnInit(): void {
    if (this.HABservice.habitacionTipo.HTItarifas)
      this.Arraytarifa = this.HABservice.habitacionTipo.HTItarifas;
    else
      this.AgregarTarifa();
  }

  ngOnDestroy(): void {

  }

  cambiarValor(id: number) {
    document.getElementById('lblValor_' + id).style.display = "none";
    document.getElementById('txtValor_' + id).style.display = "block";
    document.getElementById('txtValor_' + id).focus();
  }

  actualizarValor(id: number) {
    document.getElementById('txtValor_' + id).style.display = "none";
    document.getElementById('lblValor_' + id).style.display = "block";
  }

  AgregarTarifa() {
    let tarifa = new DTOtarifa;
    tarifa.TARid = this.Arraytarifa.length + 1;
    tarifa.TARcantHoras = 4;
    tarifa.TARvalor = 50000;
    this.Arraytarifa.push(tarifa);

    this.HABservice.habitacionTipo.HTItarifas = this.Arraytarifa;
  }
}
