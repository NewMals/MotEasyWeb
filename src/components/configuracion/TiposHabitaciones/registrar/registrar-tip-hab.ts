import { Component, OnInit } from '@angular/core';
import { DTOHabitacionTipo } from '../../../../modelos/DTOhabitacion';
import { HabitacionTipoProvider } from '../../../../providers/general/habitacion-tipo';
import { AlertController } from 'ionic-angular';

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
  HabitacionTipo = new DTOHabitacionTipo;

  constructor(
    private TIHservice: HabitacionTipoProvider
    , private alertCtrl: AlertController
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

  validarCantidad() {
    this.HabitacionTipo.HTIcantidad = (this.HabitacionTipo.HTIcantidad > 50 || this.HabitacionTipo.HTIcantidad === 0) ? 0 : this.HabitacionTipo.HTIcantidad;
    if(this.HabitacionTipo.HTIcantidad <= 0){
      this.Alertas("La cantidad de habitaciones, no puede ser menor a 0 o mayor a 50");
    }
  }

  Alertas(message: string) {
    let alert = this.alertCtrl.create({
      title: message,
      buttons: ['Aceptar']
    });

    alert.present();
  }

  EsNumerico(evt) {
    let charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)){
      return false;
    }
    return true;
  }

}
