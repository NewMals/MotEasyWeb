import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/app';
import { DTOfoto } from '../../modelos/DTOfoto';
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
    console.log('Hello EstablecimientoProvider Provider');
  }

  getEstablecimientoFb(id: string) {
    firebase.firestore().collection("Establecimientos").doc(id).get()
      .then(data => {
        this.establecimiento = data.data() as DTOEstablecimiento;
        this.guardarBd();
      });
  }


  consultarBd(): Promise<any> {
    return this.storage.get("Establecimiento")
      .then(data => {
        this.establecimiento = JSON.parse(data);
        return this.establecimiento;
      });
  }


  guardarBd() {
    this.storage.set("Establecimiento", JSON.stringify(this.establecimiento));
  }

  guardarFb() {

    let EST =  JSON.stringify(this.establecimiento);

    this.USUservice.consultarBd().then(data => {
      firebase.firestore().collection("Establecimientos")
        .doc(data.USUestablecimiento)
        .set(JSON.parse(EST))
        .then(()=>{
          this.guardarBd();
        });
        // .then(data => {
        //   this.establecimiento = data.data() as DTOEstablecimiento;
        //   this.guardarBd();
        // });
    });
  }



  storageGuardarFb(foto: DTOfoto): Promise<any> {
    return this.USUservice.consultarBd().then(data => {
      return this.storageRef.child("establecimientos/" + data.USUestablecimiento + "/sitio/" + "EST_" + foto.FOTorden + ".jpg")
        .putString(foto.FOTurl, 'data_url')
        .then(snapshot => {
          foto.FOTurl = snapshot.downloadURL;
          return foto;
        });
    });
  }

}
