import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { AdministracionPageModule } from '../pages/administracion/administracion.module';
import { ConfiguracionPageModule } from '../pages/configuracionGeneral/configuracion/configuracion.module';
import { ComponentsModule } from '../components/components.module';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyASR-VQFfepVIDxJz_tLRzK7mrJNz_MtB0",
  authDomain: "mote-e0df6.firebaseapp.com",
  databaseURL: "https://mote-e0df6.firebaseio.com",
  projectId: "mote-e0df6",
  storageBucket: "mote-e0df6.appspot.com",
  messagingSenderId: "1075024717028"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    AdministracionPageModule,
    ConfiguracionPageModule,
    LoginPageModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
