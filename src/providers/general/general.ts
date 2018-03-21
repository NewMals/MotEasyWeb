import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/app';
/*
  Generated class for the GeneralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeneralProvider {

  constructor(private storage: Storage) {
    console.log('Hello UserProvider Provider');
  }


  consultarBd(id: string): Promise<any> {
    return this.storage.get(id).then(data =>{
      return  JSON.parse(data);
    });
  }

  consultarFb(collection: string , doc: string): Promise<any>{
     return firebase.firestore().collection(collection).doc(doc).get()
      .then(data => {
         return data.data();
      });       
  }

  

  guardarBd(id: string, data: any){
    this.storage.set(id, JSON.stringify(data));
  }

  guardarFb(){

  }

}
