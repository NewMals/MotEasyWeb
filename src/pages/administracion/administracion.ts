import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { EstablecimientoProvider } from '../../providers/general/Establecimiento';
import { DTOHabitacionView, DTOHabitacionItem } from '../../modelos/DTOhabitacion';
import { HabitacionTipoProvider } from '../../providers/general/habitacion-tipo';

/**
 * Generated class for the AdministracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-administracion',
  templateUrl: 'administracion.html',
})
export class AdministracionPage {

  tiposHabitacion = new Array<DTOHabitacionView>();
  habitaciones = new Array<DTOHabitacionItem>();

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private modalCtrl: ModalController
    , private ESTservice: EstablecimientoProvider
    , private TIHservice: HabitacionTipoProvider
  ) {


  }

  ionViewDidLoad() {
    this.cargarTipos();
    console.log('ionViewDidLoad AdministracionPage');
  }

  cargarTipos() {
    this.tiposHabitacion = this.ESTservice.establecimiento.ESThabitacionesTipos;
  }

  mostrarHabitaciones(idTipo) {
    // let modal = this.modalCtrl.create(
    //   GenerarHabitacionesComponent, null, { enableBackdropDismiss: false }
    // )

    // modal.onDidDismiss(() => {
    //   this.cargarTipos();
    // });

    this.TIHservice.inicializar(idTipo).then(() => {
        this.habitaciones = this.TIHservice.habitacionTipo.HTIhabitaciones;
      //   if (this.habitaciones === undefined || this.habitaciones.length > 0) {
      //     modal.present();
      // }
    });
  }

}

