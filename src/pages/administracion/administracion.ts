import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstablecimientoProvider } from '../../providers/general/Establecimiento';
import { DTOhabitaciones } from '../../modelos/DTOhabitacion';

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

  tiposHabitacion = new Array<DTOhabitaciones>();

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private ESTservice: EstablecimientoProvider  
  ) {
  

  }

  ionViewDidLoad() {
    this.cargarTipos();
    console.log('ionViewDidLoad AdministracionPage');
  }

  cargarTipos(){
    this.tiposHabitacion = this.ESTservice.establecimiento.ESThabitacionesTipos;
  }

}
