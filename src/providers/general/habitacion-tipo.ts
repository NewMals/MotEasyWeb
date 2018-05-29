import { Injectable } from '@angular/core';
import { UserProvider } from './user';
import firebase from 'firebase/app';
import { DTOHabitaciontipo } from '../../modelos/DTOhabitacion';
import { Storage } from '@ionic/storage';

@Injectable()
export class HabitacionTipoProvider {

  ArrayTipoHAB = new Array<DTOHabitaciontipo>();
  habitacionTipo = new DTOHabitaciontipo;

  constructor(private storage: Storage
    , private USUservice: UserProvider
  ) {
    console.log('Hello HabitacionTipoProvider Provider');
  }

  BuscarHabitacionTipo(id: string): Promise<DTOHabitaciontipo> {
    return this.consultarBd(id).then(data => {
      if (!data && id) {
        return this.consultaFb(id);
      }
      return data;
    });
  }

  consultarBd(id): Promise<any> {
    return this.storage.get("HabitacionTipos")
      .then(data => {
        this.ArrayTipoHAB = JSON.parse(data);
        this.ArrayTipoHAB.forEach(Hab =>{
          if(Hab.HTIid == id)  
            return this.habitacionTipo = Hab;
        });
      });
  }

  consultaFb(id: string) {
    this.USUservice.consultarBd().then(data => {
      firebase.firestore().collection('Establecimientos')
        .doc(data.USUestablecimiento)
        .collection("HabitacionTipos")
        .doc(id)
        .get()
        .then(data => {
          this.habitacionTipo = data.data() as DTOHabitaciontipo;
          this.ArrayTipoHAB.push(this.habitacionTipo);
          this.guardarBd();
        });
    });
  }

  crear() {
    this.habitacionTipo.HTIid = this.ArrayTipoHAB.length + (this.ArrayTipoHAB.length > 0  ? -1 : 0);
    this.guardarFb();
  }

  guardarFb(){
    let HAB = JSON.stringify(this.habitacionTipo);
    this.USUservice.consultarBd().then(data => {
      firebase.firestore().collection('Establecimientos')
        .doc(data.USUestablecimiento)
        .collection("HabitacionTipos")
        .doc(this.habitacionTipo.HTIid.toString())
        .set(JSON.parse(HAB))
        .then(() =>{
            this.ArrayTipoHAB.push(JSON.parse(HAB));
            this.guardarBd();
        });
    });
  }

  guardarBd() {
    this.storage.set("HabitacionTipos", JSON.stringify(this.ArrayTipoHAB));
  }
}
