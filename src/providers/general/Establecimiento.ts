import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/app';
import { DTOfoto } from '../../modelos/DTOfoto';
import { DTOEstablecimiento } from '../../modelos/DTOestablecimiento';
/*
  Generated class for the GeneralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EstablecimientoProvider {

  establecimiento : DTOEstablecimiento;

  constructor(private storage: Storage) {
    console.log('Hello EstablecimientoProvider Provider');
    this.establecimiento = new DTOEstablecimiento;
  }

  getEstablecimientoFb(id: string){
    firebase.firestore().collection("Establecimientos").doc(id).get()
    .then(data => {
      this.establecimiento = data.data() as DTOEstablecimiento;
       this.guardarBd();
    });   
  }


  consultarBd(id: string): Promise<any> {
    return this.storage.get(id).then(data =>{
      return  JSON.parse(data);
    });
  }
 

  guardarBd(){
    this.storage.set("Establecimiento", JSON.stringify(this.establecimiento));
  }

  guardarFb(){

  }

  storageGuardarFb(foto : DTOfoto): Promise<any>{
    console.log(foto);
    let storageRef = firebase.storage().ref();
    return this.consultarBd("User").then(data =>{
      storageRef.child("establecimientos/" + data.USUestablecimiento + "/sitio/" + "EST_" + foto.FOTorden + ".jpg")
      .putString(foto.FOTurl, 'data_url')
      .then(snapshot =>{
        foto.FOTurl = snapshot.downloadURL[0];
        
      });
    });
  }

}
