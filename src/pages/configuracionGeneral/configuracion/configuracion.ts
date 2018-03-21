import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeneralProvider } from '../../../providers/general/general';
import { DTOusuario } from '../../../modelos/DTOusuario';
import { DTOEstablecimiento } from '../../../modelos/DTOestablecimiento';

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
    , private general: GeneralProvider
  ) {
  }

  ionViewDidLoad() {
    
  }

  configurarEstablecimiento(){
    this.obtenerEstablecimiento();
    this.navCtrl.setRoot("EstablecimientoPage");
  }

  configurarHabitacion(){
    this.navCtrl.setRoot("");
  }

  obtenerEstablecimiento() {
    this.general.consultarBd('User')
      .then(user =>{
          let usuario = user as DTOusuario;
          this.general.consultarFb("Establecimiento", usuario.USUestablecimiento)
          .then(data =>{
              let establecimiento = data as DTOEstablecimiento;
              this.general.guardarBd("Establecimiento", establecimiento)
          });
      }); 
  }

}
