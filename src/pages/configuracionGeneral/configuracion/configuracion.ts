import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstablecimientoProvider } from '../../../providers/general/Establecimiento';
import { DTOEstablecimiento } from '../../../modelos/DTOestablecimiento';
import { HabitacionTipoProvider } from '../../../providers/general/habitacion-tipo';
import { DTOfoto } from '../../../modelos/DTOfoto';

/**
 * Generated class for the ConfiguracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class ConfiguracionPage {

  text: string = 'progress-bar'
  est = new DTOEstablecimiento;

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private ESTservice: EstablecimientoProvider
    , private TIHservice: HabitacionTipoProvider
  ) {
    console.log("Hello Configuracion");
  }



  ionViewDidEnter() {
    this.obtenerEstablecimiento();
  }

  // configurarEstablecimiento() {
  //   let ArrayFotos = new Array<DTOfoto>();

  //   if (this.ESTservice.establecimiento.ESTfotos) {
  //     ArrayFotos = this.ESTservice.establecimiento.ESTfotos;
  //   }
  //   this.navCtrl.setRoot("EstablecimientoPage", {
  //     objFotos: ArrayFotos 
  //     , file: "sitio"
  //     , marca: "EST"
  //   });
  // }

  // configurarHabitacion(id: number) {
  //   this.HABservice.inicializar(id).then(() => {
  //     this.navCtrl.setRoot("TiposHabitacionesPage");
  //   });
  // }

  obtenerEstablecimiento() {
    this.est.ESThabitacionesTipos = this.ESTservice.establecimiento.ESThabitacionesTipos;
  }

  AgregarTipHab() {
    this.TIHservice.crear().then(() => {
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
