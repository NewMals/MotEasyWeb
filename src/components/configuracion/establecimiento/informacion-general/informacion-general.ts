import { Component } from '@angular/core';
import { DTOusuario } from '../../../../modelos/DTOusuario';
import { Storage } from '@ionic/storage';
import { GeneralProvider } from '../../../../providers/general/general';
import { DTOEstablecimiento } from '../../../../modelos/DTOestablecimiento';


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
export class InformacionGeneralComponent {

  text: string;
  usuario : DTOusuario = {USUid:"", USUemail: "", USUprimerNombre: "", USUprimerApellido: "", USUidentificacion:""};
  establecimiento = new DTOEstablecimiento //= {ESTnit: 0 , ESTnombre: ""};

  constructor(private storage: Storage, private general: GeneralProvider) {
    console.log('Hello InformacionGeneralComponent Component');
    this.text = 'Hello World';
    this.obtenerUSU();
    this.obtenerEST();
  }

  obtenerUSU(){
    this.general.consultarBd("User").then(data =>{
      this.usuario = data as DTOusuario;
    })
  }

  obtenerEST(){ 
    this.general.consultarBd("Establecimiento").then(data =>{
      if(data){
        this.establecimiento = data as DTOEstablecimiento;
      }      
    });
  }

  GuardarEST(){
    this.general.guardarBd("Establecimiento", this.establecimiento);
  }

}
