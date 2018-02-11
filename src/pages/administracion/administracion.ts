import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  tiposHabitacion = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  

  }

  ionViewDidLoad() {
    this.cargarTipos();
    console.log('ionViewDidLoad AdministracionPage');
  }

  cargarTipos(){
    this.tiposHabitacion = [
      {
        TIHidTipo: 1
        , TIHdescripcion: "Sencilla"
        , TIHorden: 1
      },
      {
        TIHidTipo: 2
        , TIHdescripcion: "Suite"
        , TIHorden: 2
      },
      {
        TIHidTipo: 3
        , TIHdescripcion: "VIP"
        , TIHorden: 3
      }
    ]
  }

}
