import { Component, OnInit, ViewChild} from '@angular/core';
import { DTOHabitacionTipo, HTIenumEstado } from '../../../../modelos/DTOhabitacion';
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

  CantHabilitar: boolean = false;
  HabitacionTipo = new DTOHabitacionTipo;
  @ViewChild('CantHab') CantHab;

  constructor(
    private TIHservice: HabitacionTipoProvider
    , private alertCtrl: AlertController
  ) {
    console.log('Hello RegistarTipHabComponent Component');
    //this.HabitacionTipo = obj ? obj : new DTOHabitaciontipo;
    // this.ArrayComplementos = [
    //   {COMid: "" , COMdescripcion: "Parqueadero"}]
  }

  ngOnInit(): void {
    this.HabitacionTipo = this.TIHservice.habitacionTipo;
    this.CantHabilitar = (this.HabitacionTipo.HTIestado === HTIenumEstado.Registrando) ? false : true;
    this.validacionCampos();
  }

  validarCantidad() {
    this.HabitacionTipo.HTIcantidad = (this.HabitacionTipo.HTIcantidad > 50 || this.HabitacionTipo.HTIcantidad === 0 || this.HabitacionTipo.HTIcantidad === undefined) ? null : this.HabitacionTipo.HTIcantidad;
    this.controlCantidad();
  }


  Alertas(message: string) {
    let alert = this.alertCtrl.create({
      title: message,
      buttons: ['Aceptar']
    });

    alert.present();
  }

  EsNumerico(evt) {
    let event;
    let charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  controlCantidad() {
    if (this.HabitacionTipo.HTIcantidad <= 0) {
      document.getElementById("continuar").setAttribute('disabled', 'disabled');
      this.CantHab.setFocus();
    }
    else {
      document.getElementById("continuar").removeAttribute('disabled');
    }
  }

  validacionCampos(){
    let {
      HTInombre = "",
      HTIdescripcion = ""
    } = this.HabitacionTipo

    document.getElementById("continuar").setAttribute('disabled', 'disabled');

    switch ("") {
      case HTInombre: {
        document.getElementById("error").innerHTML = "Registre el nombre de la habitación";
        break;
      }

      case HTIdescripcion: {
        document.getElementById("error").innerHTML = "Registre la descripcion de la habitación";
        break;
      }

      default : {
        document.getElementById("error").innerHTML = "";
        document.getElementById("continuar").removeAttribute('disabled');
        break;
      }
    }
  }

}
