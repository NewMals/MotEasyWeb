import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AdministracionPage } from '../pages/administracion/administracion';
import { ConfiguracionPage } from '../pages/configuracionGeneral/configuracion/configuracion';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';

//import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage;


  pages: Array<{ title: string, component: any, icon: string, id: number}>;

  constructor(public platform: Platform
    , public statusBar: StatusBar
    , public splashScreen: SplashScreen
    , private auth: AuthProvider 
  ) {
    this.inicializarApp();
    this.cargarMenu();
    this.auth.StateSesion();
  }

  inicializarApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  cargarMenu(){
    this.pages = [
      {title: "Administrar habitaciones", component: AdministracionPage, icon: "albums", id: 1}
      , {title: "Configuracion", component: ConfiguracionPage, icon: "settings", id: 2}
    ]
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }


}

