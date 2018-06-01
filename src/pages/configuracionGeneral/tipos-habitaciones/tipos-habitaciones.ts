import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrarTipHabComponent } from '../../../components/configuracion/TiposHabitaciones/registrar/registrar-tip-hab';
import { TarifasComponent } from '../../../components/configuracion/tarifas/tarifas';
import { HabitacionTipoProvider } from '../../../providers/general/habitacion-tipo';
import { EstablecimientoProvider } from '../../../providers/general/Establecimiento';
import { DTOEstablecimiento } from '../../../modelos/DTOestablecimiento';



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
    {id: 1 , titulo: "Registrar tipo de habitación", iconName: "folder-open", activo: true, component: RegistrarTipHabComponent}
    , {id: 2 , titulo: "Tarifas", iconName: "logo-usd", activo: false, component: TarifasComponent}
  ]

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private HABservice: HabitacionTipoProvider
    , private ESTservice: EstablecimientoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiposHabitacionesPage');
  }

  ionViewDidLeave(){
    this.ESTservice.consultarBd().then((data : DTOEstablecimiento) => {
        
    });
    
  }

}
