import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RegistroComponent } from '../../components/registro/registro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  mensajeError: string;
  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , private auth: AuthProvider
    , private modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  SignWithEmail(){

    this.auth.signInWithEmail("", "").then(usuario=>{
      console.log("Login", usuario);
      if(usuario.code){
        this.mensajeError = "Correo y/o contraseña incorrectos";
      }
    }
    ).catch(error =>{
      console.log("error", error);
        this.mensajeError = "La aplicacion no se encuentra disponible";
    });
  }

  Crear(){
    let modal = this.modalCtrl.create(
      RegistroComponent , null, { enableBackdropDismiss: false}
    ) 
    modal.present();
  }

}
