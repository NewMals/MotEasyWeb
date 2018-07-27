import { Component } from '@angular/core';
import { EstablecimientoProvider } from '../../../../providers/general/Establecimiento';
import { DTOEstablecimiento } from '../../../../modelos/DTOestablecimiento';
import { DTOfoto } from '../../../../modelos/DTOfoto';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the ViewEstablecimientoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'view-establecimiento',
  templateUrl: 'view-establecimiento.html'
})
export class ViewEstablecimientoComponent {

  text: string;
  establecimiento: DTOEstablecimiento;
  foto : string;

  constructor(public navCtrl: NavController
    , private ESTservice: EstablecimientoProvider) {
    console.log('Hello ViewEstablecimientoComponent Component');
    this.text = 'Hello World';
    this.obtenerEstablecimiento();
  }

  obtenerEstablecimiento(){
    this.establecimiento = this.ESTservice.establecimiento;
    this.foto = (this.ESTservice.establecimiento.ESTfotos && this.ESTservice.establecimiento.ESTfotos.length) ? this.ESTservice.establecimiento.ESTfotos.find(foto => foto.FOTactiva === true).FOTurl : "";
  }

  configurarEstablecimiento() {
    let ArrayFotos = new Array<DTOfoto>();
    
    if (this.ESTservice.establecimiento.ESTfotos) {
      ArrayFotos = this.ESTservice.establecimiento.ESTfotos;
    }
    this.navCtrl.setRoot("EstablecimientoPage", {
      objFotos: ArrayFotos 
      , file: "sitio"
      , marca: "EST"
    });
  }
}
