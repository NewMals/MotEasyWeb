import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstablecimientoProvider } from '../../../providers/general/Establecimiento';
import { DTOusuario } from '../../../modelos/DTOusuario';
import { DTOEstablecimiento } from '../../../modelos/DTOestablecimiento';
import { UserProvider } from '../../../providers/general/user';
import { HabitacionTipoProvider } from '../../../providers/general/habitacion-tipo';

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
    , private USUservice: UserProvider
    , private HABservice: HabitacionTipoProvider
  ) {
    console.log("Hello Configuracion");
    // this.obtenerEstablecimiento();
  }



  ionViewDidEnter() {
    this.obtenerEstablecimiento();
  }

  configurarEstablecimiento() {
    this.navCtrl.setRoot("EstablecimientoPage");
  }

  configurarHabitacion(id: number) {
    this.HABservice.inicializar(id).then(() => {
      this.navCtrl.setRoot("TiposHabitacionesPage");
    });
  }

  obtenerEstablecimiento() {
    // this.USUservice.consultarBd().then(user => {
    //   if (user) {
    //     this.ESTservice.inicializar(user.USUestablecimiento).then(data => {
    //       if (data.ESThabitacionesTipos) {
    //         this.est.ESThabitacionesTipos = data.ESThabitacionesTipos;
    //       }
    //     });
    //     //this.HABservice.inicializar();
    //   }
    // });
    this.est.ESThabitacionesTipos = this.ESTservice.establecimiento.ESThabitacionesTipos;
  }

  AgregarTipHab() {
    this.HABservice.crear().then(()=>{
      this.navCtrl.setRoot("TiposHabitacionesPage");
    });
    
  }
}
