import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { AuthProvider } from '../../../../providers/auth/auth';
import { DTOusuario } from '../../../../modelos/DTOusuario';


/**
 * Generated class for the RegistroComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'registro',
  templateUrl: 'registro.html'
})
export class RegistroComponent {

  mensajeError: string;
  text: string;
  usuario : DTOusuario = {USUid:"", USUemail: "", USUprimerNombre: "", USUprimerApellido: "", USUidentificacion:""};
  password: string = "";
  confirPassword: string = "";
  Habilitar: boolean = false;
  sizePass: boolean;

  constructor(public viewCtrl: ViewController
    , private auth: AuthProvider
  ) {
    console.log('Hello RegistroComponent Component');
    this.text = 'Hello World';
  }

  CerrarModal() {
    this.viewCtrl.dismiss();
  }

  confirmarPass(event) {
    this.sizePass = (this.password.length > 7) ? false : true;
    this.Habilitar = ((this.password == this.confirPassword) && this.password.length > 7) ? true : false;
  }

  RegistrarUsuario() {
    if ((this.password.length > 7) && (this.password == this.confirPassword) && (this.usuario.USUemail)) {
      this.auth.createEmail(this.usuario, this.password).then(usuario => {
        if (usuario == "true") {
          this.CerrarModal();
        } else {
          this.mensajeError = usuario;
        }
      });
    }
  }
}
