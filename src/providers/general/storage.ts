// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DTOfoto } from '../../modelos/DTOfoto';
import * as firebase from 'firebase/app';
import { UserProvider } from './user';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  storageRef = firebase.storage().ref();

  constructor(
    private USUservice: UserProvider
  ) {
    console.log('Hello StorageProvider Provider');
  }

  storageGuardarFb(file: string , marca: string ,foto: DTOfoto): Promise<any> {
    return this.USUservice.consultarBd().then(data => {
      return this.storageRef.child("establecimientos/" + data.USUestablecimiento + "/" + file + "/" + marca + "_" + foto.FOTorden + ".jpg")
        .putString(foto.FOTurl, 'data_url')
        .then(snapshot => {
          foto.FOTurl = snapshot.downloadURL;
          return foto;
        });
    });
  }
}
