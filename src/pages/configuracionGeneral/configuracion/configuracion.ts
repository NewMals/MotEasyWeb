import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EstablecimientoProvider } from '../../../providers/general/Establecimiento';
import { DTOusuario } from '../../../modelos/DTOusuario';
import { DTOEstablecimiento } from '../../../modelos/DTOestablecimiento';
import { UserProvider } from '../../../providers/general/user';

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

  constructor(public navCtrl: NavController, public navParams: NavParams
    , private ESTservice: EstablecimientoProvider
    , private USUservice: UserProvider
  ) {
  }

  ionViewDidLoad() {
    this.obtenerEstablecimiento();
  }

  configurarEstablecimiento(){
    this.navCtrl.setRoot("EstablecimientoPage");
  }

  configurarHabitacion(){
    this.navCtrl.setRoot("");
  }

  obtenerEstablecimiento() {
    this.USUservice.consultarBd().then(user =>{
      this.ESTservice.getEstablecimientoFb(user.USUestablecimiento);   
    });      
  }

}
