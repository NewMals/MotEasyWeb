import { Injectable } from '@angular/core';
//import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { LoadingController, ToastController, Platform, NavController, App } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "angularfire2/auth";
import { UserProvider } from '../general/user';
import { EstablecimientoProvider } from '../general/Establecimiento';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  loading;


  constructor(
    protected app: App,
    private afAuth: AngularFireAuth,
    //private fb: Facebook,
    private platform: Platform,
    public loadingCtrl: LoadingController,
    //private googlePlus: GooglePlus,
    public toastCtrl: ToastController,
    //public firebaseAng: AngularFirestore
    private USUservice: UserProvider,
    private USUestablecimiento: EstablecimientoProvider
  ) {
    console.log('Hello AuthProvider Provider');

    this.loading = this.loadingCtrl.create({
      content: 'Iniciando sesión'
    });
  }

  get navCtrl(): NavController {
    return this.app.getRootNav();
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  StateSesion() {
    firebase.auth().onAuthStateChanged(usuario => {
      if (usuario) {
        this.consultar(usuario.uid).then((data) => {
          this.USUestablecimiento.inicializar(data.USUestablecimiento).then(data => {
            this.navCtrl.setRoot('ConfiguracionPage');
          });
        });
      } else {
        this.navCtrl.setRoot('LoginPage');
      }
    });
  }

  StateSesionValid() {
    firebase.auth().onAuthStateChanged(usuario => {
      if (usuario) {
        this.navCtrl.setRoot('ConfiguracionPage');
      }
    });
  }
  // signInWithGoogle() {
  //   this.loading.present();
  //   var isWeb = document.URL.startsWith('http');

  //   if (!isWeb) {
  //     this.googlePlus.login({
  //       'webClientId': '1075024717028-5mc24hd4dcdhss32rifdau2b40c0c3j0.apps.googleusercontent.com',
  //       'offline': true
  //     }).then(res => {
  //       firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
  //         .then(success => {
  //           console.log("Firebase success: " + JSON.stringify(success));
  //           this.loading.dismiss();
  //         }).catch(error => {
  //           this.loading.dismiss();
  //           console.log("Firebase failure: " + JSON.stringify(error));
  //         });
  //     });
  //   } else {
  //     this.afAuth.auth
  //       .signInWithPopup(new firebase.auth.GoogleAuthProvider())
  //       .then(res => {
  //         this.loading.dismiss()
  //       }).catch(err => {
  //         this.loading.dismiss();
  //       });
  //   }
  // }

  // signInWithFacebook() {
  //   this.loading.present();
  //   if (this.platform.is('cordova')) {
  //     return this.fb.login(['email', 'public_profile']).then(res => {
  //       const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
  //       this.loading.dismiss();
  //       return firebase.auth().signInWithCredential(facebookCredential);
  //     }).catch(err => {
  //       console.log(err);
  //       this.loading.dismiss();
  //       this.presentToast("Error en la autenticación: " + err);
  //     })
  //   }
  //   else {
  //     this.loading.present();
  //     return this.afAuth.auth
  //       .signInWithPopup(new firebase.auth.FacebookAuthProvider())
  //       .then(res => {
  //         this.loading.dismiss();;
  //       }).catch(err => {
  //         console.log(err);
  //         this.loading.dismiss();
  //         this.presentToast("Error en la autenticación: " + err);

  //       });
  //   }
  // }

  createEmail(usuario, password: string) {
    let respuesta = "";
    return firebase.auth().createUserWithEmailAndPassword(usuario.USUemail, password).then((response: firebase.User) => {
      usuario.USUid = response.uid;
      this.crearEstablecimiento(usuario);
      this.verificarEmail();
      return "true";
    }).catch((error: firebase.FirebaseError) => {
      //console.log("error", error);
      switch (error.code) {
        case 'auth/email-already-in-use': {
          respuesta = "La dirección de correo electrónico ya está siendo utilizada por otra cuenta."
          break;
        }
        case 'auth/invalid-email': {
          respuesta = "Correo no valido";
          break;
        }
        default: {
          respuesta = "Error del servidor, pongase en contacto con el administrador"
          break;
        }
      }
      this.SignOut();
      return respuesta;
    });
  }

  verificarEmail() {
    localStorage.setItem('Verficiado', 'red');
    let user = firebase.auth().currentUser;
    user.sendEmailVerification();
  }

  signInWithEmail(email: string, password: string): Promise<any> {
    let respuesta = "";
    return firebase.auth().signInWithEmailAndPassword(email, password).then(usuario => {
      if (!usuario.emailVerified) {
        this.verificarEmail();
      }
      this.consultar(usuario.uid);
      return "true";
    }).catch((error: firebase.FirebaseError) => {
      switch (error.code) {
        case 'auth/invalid-email': {
          respuesta = "Correo y/o contraseña incorrectos";
          break;
        }
        case 'auth/user-not-found': {
          respuesta = "Usuario no registrado";
          break;
        }
        case 'auth/wrong-password': {
          respuesta = "Contraseña incorrecta";
          break;
        }
        case 'auth/too-many-requests': {
          respuesta = "Cuenta bloqueada temporalmente debido a una actividad inusual";
          break;
        }
        default: {
          respuesta = "Error del servidor, pongase en contacto con el administrador"
          break;
        }
      }
      return respuesta;
    });
  }

  SignOut() {
    firebase.auth().signOut();
  }



  crearEstablecimiento(usuario) {
    // firebase.firestore().collection('Establecimientos')
    //   .add({}).then(response => {
    //     usuario.USUestablecimiento = response.id;
    //     this.crearUser(usuario);
    //   });

    this.USUestablecimiento.crear()
      .then(data => {
        usuario.USUestablecimiento = data.id;
        this.crearUser(usuario);
      });
  }

  crearUser(usuario) {
    // firebase.firestore().collection('Usuarios')
    //   .doc(usuario.USUid)
    //   .set(usuario)
    //   .then(() => {
    //     this.guardar(usuario);
    //   });
    this.USUservice.crear(usuario);
  }

  consultar(id: string): Promise<any> {
    return this.USUservice.inicializar(id).then(data => {
      return data;
    });
  }

  // guardar(usuario: DTOusuario) {
  //   this.storage.set("User", JSON.stringify(usuario));
  //   this.consultar(usuario.USUid);
  // }
}

