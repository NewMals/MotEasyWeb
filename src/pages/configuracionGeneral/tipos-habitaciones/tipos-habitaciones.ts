import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformacionGeneralComponent } from '../../../components/configuracion/establecimiento/informacion-general/informacion-general';
/**
 * Generated class for the TiposHabitacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tipos-habitaciones',
  templateUrl: 'tipos-habitaciones.html',
})
export class TiposHabitacionesPage {

  ArrayConfiguracionHAB = [
    {id: 1 , titulo: "Informacion General", iconName: "folder-open", activo: true, component: InformacionGeneralComponent}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiposHabitacionesPage');
  }

}
