import { Component, OnInit, OnDestroy } from '@angular/core';
import { DTOtarifa } from '../../../modelos/DTOtarifa';
import { DTOHabitacionTipo } from '../../../modelos/DTOhabitacion';
import { HabitacionTipoProvider } from '../../../providers/general/habitacion-tipo';
import { TarifasProvider } from '../../../providers/general/tarifasService';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the TarifasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tarifas',
  templateUrl: 'tarifas.html',
  providers: [TarifasProvider]
})
export class TarifasComponent implements OnInit, OnDestroy {

  Arraytarifa = new Array<DTOtarifa>();
  text: string;

  constructor(
    private HABservice: HabitacionTipoProvider,
    private TARservice: TarifasProvider,
    private alertCtrl: AlertController
  ) {
    console.log('Hello TarifasComponent Component');
    this.text = 'Hello World';

  }

  ngOnInit(): void {
    if (this.HABservice.habitacionTipo.HTItarifas)
      this.Arraytarifa = this.HABservice.habitacionTipo.HTItarifas;
    else
      this.AgregarTarifa();

      this.TARservice.ArrayTarifa = this.Arraytarifa;
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

  Alertas(message: string) {
    let alert = this.alertCtrl.create({
      title: message,
      buttons: ['Aceptar']
    });

    alert.present();
  }

  AgregarTarifa() {
    if (this.Arraytarifa.length == 6) {
      this.Alertas('Ha superado el limite de tarifas');
      return;
    }

    this.Arraytarifa = this.TARservice.AgregarTarifa();
    this.HABservice.habitacionTipo.HTItarifas = this.Arraytarifa;
  }

  EliminarTarifa(tarifa : DTOtarifa){
    this.Arraytarifa = this.TARservice.EliminarTarifa(tarifa);
    this.HABservice.habitacionTipo.HTItarifas = this.Arraytarifa;
  }
}
