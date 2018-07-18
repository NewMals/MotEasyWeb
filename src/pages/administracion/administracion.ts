import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstablecimientoProvider } from '../../providers/general/Establecimiento';
import { DTOViewhabitacion, DTOItemhabitacion } from '../../modelos/DTOhabitacion';
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

  tiposHabitacion = new Array<DTOViewhabitacion>();
  habitaciones = new Array<DTOItemhabitacion>();

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private ESTservice: EstablecimientoProvider  
    , private TIHservice: HabitacionTipoProvider
  ) {
  

  }

  ionViewDidLoad() {
    this.cargarTipos();
    console.log('ionViewDidLoad AdministracionPage');
  }

  cargarTipos(){
    this.tiposHabitacion = this.ESTservice.establecimiento.ESThabitacionesTipos;
  }

  mostrarHabitaciones(idTipo){
    this.TIHservice.inicializar(idTipo).then(Tipo => {
      this.habitaciones = this.TIHservice.habitacionTipo.HTIhabitaciones;
    });
  }
}

