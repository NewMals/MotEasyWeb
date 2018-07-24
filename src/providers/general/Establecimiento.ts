import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/app';
import { DTOEstablecimiento } from '../../modelos/DTOestablecimiento';
import { UserProvider } from './user';
/*
  Generated class for the GeneralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class EstablecimientoProvider {

  establecimiento = new DTOEstablecimiento;
  storageRef = firebase.storage().ref();

  constructor(private storage: Storage
    , private USUservice: UserProvider
  ) {
    console.log('Hello EstablecimientoTipoProvider Provider');
  }

  crear(): Promise<any> {
    return firebase.firestore().collection('Establecimientos')
      .add({}).then(response => {
        return response;
      });
  }

  inicializar(id?: string): Promise<DTOEstablecimiento> {
    return this.consultarBd().then(data => {
      if (!data && id) {
        return this.consultaFb(id);
      }
      return data;
    });
  }

  consultarBd(): Promise<DTOEstablecimiento> {
    return this.storage.get("Establecimiento")
      .then(data => {
        this.establecimiento = JSON.parse(data) as DTOEstablecimiento;
        this.guardarBd();
        return this.establecimiento;
      });
  }

  consultaFb(id: string) {
    return firebase.firestore().collection("Establecimientos").doc(id).get()
      .then(data => {
        this.establecimiento = data.data() as DTOEstablecimiento;
        this.guardarBd();
        return this.establecimiento;
      });
  }


  guardarBd(): Promise<DTOEstablecimiento> {
    return this.storage.set("Establecimiento", JSON.stringify(this.establecimiento)).then(() => {
      return this.establecimiento;
    });
  }

  guardarFb() {
    let EST = JSON.stringify(this.establecimiento);
    this.USUservice.consultarBd().then(data => {
      firebase.firestore().collection("Establecimientos")
        .doc(data.USUestablecimiento)
        .set(JSON.parse(EST))
        .then(() => {
          this.guardarBd();
        });
    });
  }
}
