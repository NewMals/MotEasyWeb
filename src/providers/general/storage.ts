import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DTOfoto } from '../../modelos/DTOfoto';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StorageProvider Provider');
  }

  // storageGuardarFb(foto: DTOfoto): Promise<any> {
  //   return this.USUservice.consultarBd().then(data => {
  //     return this.storageRef.child("establecimientos/" + data.USUestablecimiento + "/sitio/" + "EST_" + foto.FOTorden + ".jpg")
  //       .putString(foto.FOTurl, 'data_url')
  //       .then(snapshot => {
  //         foto.FOTurl = snapshot.downloadURL;
  //         return foto;
  //       });
  //   });
  // }
}
