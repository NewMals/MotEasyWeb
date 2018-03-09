import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController, Platform, NavController, App } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "angularfire2/auth";
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
    public toastCtrl: ToastController
  ) {
    console.log('Hello AuthProvider Provider');

    this.loading = this.loadingCtrl.create({
      content: 'Iniciando sesión'
    });

    afAuth.authState.subscribe((user: firebase.User) => {
      if (!user) {
        this.navCtrl.setRoot('LoginPage');
        return;
      }
      //this.navCtrl.setRoot('ConfiguracionPage');
    });
  }

  get navCtrl(): NavController {
    return this.app.getRootNav();
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

  signOut() {
    this.navCtrl.push('LoginPage').then(() => {
      this.afAuth.auth.signOut().then(() => {

      }).catch((err) => {
        console.log("Error logout", err);
      });
    });
  }

  user(): firebase.User {
    return this.afAuth.auth.currentUser;
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  createEmail(email: string, password: string){
    email = "michaela.lozanos@ecci.edu.co";
    password = "1022981042";
    return firebase.auth().createUserWithEmailAndPassword(email,password).then(usuario =>{
      console.log('creado',usuario);
      return usuario;
    }).catch((error: firebase.FirebaseError) => {
        console.log('error',error);
        return error;
    });
  }

  signInWithEmail(email: string, password: string): Promise<any>{
    email = "michaela.lozanos@ecci.edu.co";
    password = "1022981042";
    return firebase.auth().signInWithEmailAndPassword(email,password).then(usuario =>{
      return usuario;
    }).catch((error: firebase.FirebaseError) => {
        return error;
    });
  //   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  //     console.log(error.code);
  //     console.log(error.message);
  //  });
  }
}

