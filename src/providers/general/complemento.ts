import { Injectable } from '@angular/core';
import { DTOcomplemento } from '../../modelos/DTOcomplemento';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/app';
/*
  Generated class for the ComplementoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ComplementoProvider {

  ArrayCOM =  new Array<DTOcomplemento>();

  constructor(private storage: Storage
  ) {
    console.log('Hello ComplementoProvider Provider');
    this.ArrayCOM =  new Array<DTOcomplemento>();
  }

  inicializar() : Promise<Array<DTOcomplemento>> {
    // return this.consultarBd().then(data => {
    //   if (!data) {
        return this.consultaFb();
    //   }
    //   return data;
    // });
  }

  consultarBd(): Promise<any> {
    return this.storage.get("Complementos")
      .then(data => {
        this.ArrayCOM = JSON.parse(data) as Array<DTOcomplemento>;
        return this.ArrayCOM;
      });
  }

  consultaFb(): Promise<any> {
    return firebase.firestore().collection("Complementos").get()
      .then(data => {
        this.ArrayCOM =  new Array<DTOcomplemento>();
        data.forEach(doc => {
          let complemento = new DTOcomplemento;
          complemento = doc.data() as DTOcomplemento;
          complemento.COMid = doc.id;
          this.ArrayCOM.push(complemento);
        });
        this.guardarBd();
        return this.ArrayCOM;        
      });
  }

  guardarBd() {
    this.storage.set("Complementos", JSON.stringify(this.ArrayCOM));
  }
}
