import { Injectable } from '@angular/core';
import { UserProvider } from './user';
import firebase from 'firebase/app';
import { DTOHabitaciontipo, DTOhabitaciones } from '../../modelos/DTOhabitacion';
import { Storage } from '@ionic/storage';
import { EstablecimientoProvider } from './Establecimiento';

@Injectable()
export class HabitacionTipoProvider {

  ArrayTipoHAB = new Array<DTOHabitaciontipo>();
  habitacionTipo = new DTOHabitaciontipo;

  constructor(private storage: Storage
    , private USUservice: UserProvider
    , private ESTservice: EstablecimientoProvider
  ) {
    console.log('Hello HabitacionTipoProvider Provider');
  }

  // inicializar() {
  //   this.USUservice.consultarBd().then(data => {
  //     firebase.firestore().collection('Establecimientos')
  //       .doc(data.USUestablecimiento)
  //       .collection("HabitacionTipos")
  //       .get()
  //       .then(data =>{
  //         data.forEach(doc => {
  //           let tipoHab = new DTOHabitaciontipo;
  //           tipoHab = doc.data() as DTOHabitaciontipo;
  //           this.ArrayTipoHAB.push(tipoHab);
  //         });
  //         this.guardarBd();
  //       });
  //   });
  // }

  inicializar(id: number): Promise<DTOHabitaciontipo> {
    return this.consultarBd(id).then(data => {
      if (!data) {
        return this.consultaFb(id);
      }
      return data;
    });
  }

  consultarBd(id: number): Promise<any> {
    return this.storage.get("HabitacionTipos")
      .then(data => {
         this.habitacionTipo = JSON.parse(data) as DTOHabitaciontipo;
         return this.habitacionTipo;
        // return this.ArrayTipoHAB.forEach(Hab =>{
        //   if(Hab.HTIid == id)
        //     this.habitacionTipo = Hab;
        //     return this.habitacionTipo;
        // });
      });
  }

  consultaFb(id: number) {
    // this.USUservice.consultarBd().then(data => {
    //   firebase.firestore().collection('Establecimientos')
    //     .doc(data.USUestablecimiento)
    //     .collection("HabitacionTipos")
    //     .doc(id)
    //     .get()
    //     .then(data => {
    //       this.habitacionTipo = data.data() as DTOHabitaciontipo;
    //       this.ArrayTipoHAB.push(this.habitacionTipo);
    //       this.guardarBd();
    //     });
    // });

    this.USUservice.consultarBd().then(data => {
          firebase.firestore().collection('Establecimientos')
            .doc(data.USUestablecimiento)
            .collection("HabitacionTipos")
            .doc(id.toString())
            .get()
            .then(data =>{
              this.habitacionTipo = data.data() as DTOHabitaciontipo;
              //this.ArrayTipoHAB =  new Array<DTOHabitaciontipo>();
              // data.forEach(doc => {
              //   let tipoHab = new DTOHabitaciontipo;
              //   tipoHab = doc.data() as DTOHabitaciontipo;
              //   this.ArrayTipoHAB.push(tipoHab);
              //});
              this.guardarBd();
            });
        });
  }

  crear() {
    this.ESTservice.consultarBd().then(est =>{
      
      this.habitacionTipo = new DTOHabitaciontipo;
      this.habitacionTipo.HTIid = est.ESThabitacionesTipos ? est.ESThabitacionesTipos.length : 0;  
    });
    
    // this.habitacionTipo.HTIid = this.ArrayTipoHAB.length;
    // this.ArrayTipoHAB.push(this.habitacionTipo);
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
            //this.ArrayTipoHAB.push(JSON.parse(HAB));
            this.guardarBd();
        });
    });
  }

  guardarBd() {
    this.storage.set("Hab_" + this.habitacionTipo.HTIid, JSON.stringify(this.habitacionTipo));
  }

  // guardarEstablecimiento() {
  // }

  // BuscarHabitacionTipo(id: number) : DTOHabitaciontipo {

  //   this.ArrayTipoHAB.forEach(Hab =>{
  //     if(Hab.HTIid == id){
  //       this.habitacionTipo = Hab;
  //     }
  //   });
  //   return this.habitacionTipo;
  // }
}
