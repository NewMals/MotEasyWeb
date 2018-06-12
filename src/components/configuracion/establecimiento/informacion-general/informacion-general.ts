import { Component, OnInit } from '@angular/core';
import { DTOusuario } from '../../../../modelos/DTOusuario';
import { Storage } from '@ionic/storage';
import { EstablecimientoProvider } from '../../../../providers/general/Establecimiento';
import { DTOEstablecimiento } from '../../../../modelos/DTOestablecimiento';
import { UserProvider } from '../../../../providers/general/user';


/**
 * Generated class for the InformaconGeneralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'informacion-general',
  templateUrl: 'informacion-general.html'
})
export class InformacionGeneralComponent implements OnInit {

  text: string;
  usuario = new DTOusuario;
  establecimiento = new DTOEstablecimiento;

  constructor(
    private ESTservice: EstablecimientoProvider
    , private USUservice: UserProvider
  ) {
    console.log('Hello InformacionGeneralComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit(): void {
    this.obtenerEST();
    this.obtenerUSU();
  }

  obtenerUSU(){
    this.usuario = this.USUservice.user;
  }

  GuardarUSU(){
    this.USUservice.guardarBd();
  }

  obtenerEST(){ 
    this.establecimiento = this.ESTservice.establecimiento;
  }

  GuardarEST(){
    this.ESTservice.guardarBd();
  }

}
