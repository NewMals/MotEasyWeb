import { Injectable } from '@angular/core';
import { DTOusuario } from '../../modelos/DTOusuario';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/app';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  user: DTOusuario;

  constructor(private storage: Storage) {
    console.log('Hello UserProvider Provider');
    this.user = new DTOusuario;
  }

  inicializar(id?: string): Promise<DTOusuario> {
    return this.consultarBd().then(data => {
      if (!data && id) {
        return this.consultaFb(id);
      }
      return data;
    });
  }

  consultarBd(): Promise<DTOusuario> {
    return this.storage.get("User")
      .then(data => {
        this.user = JSON.parse(data) as DTOusuario;
        return this.user;
      });
  }


  consultaFb(id: string): Promise<DTOusuario> {
    return firebase.firestore().collection('Usuarios').doc(id).get()
      .then(data => {
        this.user = data.data() as DTOusuario;
        return this.guardarBd();
      });
  }


  guardarBd(): Promise<DTOusuario> {
    return this.storage.set("User", JSON.stringify(this.user));
  }

}
