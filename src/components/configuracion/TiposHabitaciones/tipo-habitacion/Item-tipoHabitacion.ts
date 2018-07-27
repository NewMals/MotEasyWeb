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
    this.obtenerFoto();

  }

  obtenerFoto() {
    //   if (this.Tipohabitacion.HTIfoto)
    //     this.foto = this.Tipohabitacion.HTIfotos.find(elem => elem.FOTprincipal === true).FOTurl;

    //     console.log("antes de las tarifas");
    //   if (this.Tipohabitacion.HTItarifas) {
    //     this.Tipohabitacion.HTItarifas.forEach(tar => {
    //       let valor = tar.TARvalor;
    //       this.tarifaMinima = (valor <= this.tarifaMinima || this.tarifaMinima == 0) ? valor : this.tarifaMinima;
    //       console.log("tarifas", tar);
    //     });
    //   }
    //   console.log("despues de las tarifas");
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
