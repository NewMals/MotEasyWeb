import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

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

  constructor(public viewCtrl: ViewController
    , private auth: AuthProvider
  ) {
    console.log('Hello RegistroComponent Component');
    this.text = 'Hello World';
  }

  CerrarModal() {
    this.viewCtrl.dismiss();
  }

  RegistrarUsuario() {
    this.auth.createEmail("", "").then(usuario => {
      if (usuario) {
        this.mensajeError = usuario;
      }
    });



  }

}
