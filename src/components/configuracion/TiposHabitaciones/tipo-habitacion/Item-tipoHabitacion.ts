import { Component, Input } from '@angular/core';
import { DTOViewhabitacion } from '../../../../modelos/DTOhabitacion';
import { DTOfoto } from '../../../../modelos/DTOfoto';
import { HabitacionTipoProvider } from '../../../../providers/general/habitacion-tipo';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the TipoHabitacionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'Item-tipoHabitacion',
  templateUrl: 'Item-tipoHabitacion.html'
})
export class ItemTipoHabitacionComponent {

  @Input() Tipohabitacion = new DTOViewhabitacion;
  text: string;

  constructor(
    public navCtrl: NavController
    , private TIHservice: HabitacionTipoProvider) {
    console.log('Hello TipoHabitacionComponent Component');
    this.text = 'Hello World';
  }

  configurarHabitacion(id: string) {
    this.TIHservice.inicializar(id).then(() => {
      let ArrayFotos = new Array<DTOfoto>();

      if (this.TIHservice.habitacionTipo.HTIfotos) {
        ArrayFotos = this.TIHservice.habitacionTipo.HTIfotos;
      }
      this.navCtrl.setRoot("TiposHabitacionesPage", {
        objFotos: ArrayFotos
        , file: "habitacion_" + this.TIHservice.habitacionTipo.HTInombre
        , marca: "HAB"
      });
    });
  }

}
