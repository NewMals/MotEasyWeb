import { Injectable } from '@angular/core';
import { UserProvider } from './user';
import firebase from 'firebase/app';
import { DTOHabitacionTipo } from '../../modelos/DTOhabitacion';
import { Storage } from '@ionic/storage';
import { EstablecimientoProvider } from './Establecimiento';

@Injectable()
export class HabitacionTipoProvider {

  ArrayTipoHAB = new Array<DTOHabitacionTipo>();
  habitacionTipo = new DTOHabitacionTipo;

  constructor(private storage: Storage
    , private USUservice: UserProvider
  ) {
    console.log('Hello HabitacionTipoProvider Provider');
  }

  inicializar(id: string): Promise<DTOHabitacionTipo> {
    return this.consultarBd(id).then(data => {
      if (!data) {
        return this.consultaFb(id);
      }
      return data;
    });
  }

  consultarBd(id: string): Promise<any> {
    return this.storage.get("Hab_" + id)
      .then(data => {
        this.habitacionTipo = JSON.parse(data) as DTOHabitacionTipo;
        return this.habitacionTipo;
      });
  }

  consultaFb(id: string) {
      return firebase.firestore().collection('Establecimientos')
        .doc(this.USUservice.user.USUestablecimiento)
        .collection("HabitacionTipos")
        .doc(id.toString())
        .get()
        .then(data => {
          this.habitacionTipo = data.data() as DTOHabitacionTipo;
          this.guardarBd();
          return this.habitacionTipo;
        });
  }

  crear(): DTOHabitacionTipo {
    this.habitacionTipo = new DTOHabitacionTipo;
    this.habitacionTipo.HTIid = Math.random().toString(36).substring(2);
    return this.habitacionTipo;
  }

  guardarFb() {
    let HAB = JSON.stringify(this.habitacionTipo);
    firebase.firestore().collection('Establecimientos')
      .doc(this.USUservice.user.USUestablecimiento)
      .collection("HabitacionTipos")
      .doc(this.habitacionTipo.HTIid.toString())
      .set(JSON.parse(HAB))
      .then(() => {
        this.guardarBd();
      });
  }

  guardarBd() {
    this.storage.set("Hab_" + this.habitacionTipo.HTIid, JSON.stringify(this.habitacionTipo));
  }
}
