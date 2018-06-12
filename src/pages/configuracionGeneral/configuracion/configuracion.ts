import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstablecimientoProvider } from '../../../providers/general/Establecimiento';
import { DTOEstablecimiento } from '../../../modelos/DTOestablecimiento';
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
    , private HABservice: HabitacionTipoProvider
  ) {
    console.log("Hello Configuracion");
    //this.obtenerEstablecimiento();
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

    // this.ESTservice.obser().subscribe(data =>{
    //    this.est.ESThabitacionesTipos = data.ESThabitacionesTipos; 
    // });
    this.ESTservice.objObservable.subscribe(data => {
      if (data) 
        this.est.ESThabitacionesTipos = data.ESThabitacionesTipos;
      //   console.log("entro", data);
      // } else {
      //   console.log("no entro");
      // }
    });
    // this.est.ESThabitacionesTipos = this.ESTservice.establecimiento.ESThabitacionesTipos;
  }

  AgregarTipHab() {
    this.HABservice.crear().then(() => {
      this.navCtrl.setRoot("TiposHabitacionesPage");
    });

  }
}
