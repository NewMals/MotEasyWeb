import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformacionGeneralComponent } from '../../../components/configuracion/establecimiento/informacion-general/informacion-general';
import { UbicacionComponent } from '../../../components/configuracion/establecimiento/ubicacion/ubicacion';
import { ImagenesComponent } from '../../../components/configuracion/imagenes/imagenes';


/**
 * Generated class for the EstablecimientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-establecimiento',
  templateUrl: 'establecimiento.html',
})
export class EstablecimientoPage {

  text: string = "valor";
  ArrayConfiguracionEST = [
    {id: 1 , titulo: "Informacion General", iconName: "folder-open", activo: true, component: InformacionGeneralComponent}
    , {id: 2 , titulo: "Ubicacion", iconName: "pin", activo: false, component: UbicacionComponent}
    , {id: 3 , titulo: "Imagenes", iconName: "images", activo: false, component: ImagenesComponent}
    , {id: 4 , titulo: "Guardar", iconName: "archive", activo: false, component: UbicacionComponent}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstablecimientoPage');
  }


}
