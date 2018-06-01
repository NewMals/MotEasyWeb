import { Injectable } from '@angular/core';
import { UserProvider } from './user';
import firebase from 'firebase/app';
import { DTOHabitaciontipo, DTOhabitaciones } from '../../modelos/DTOhabitacion';
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

  inicializar(): Promise<DTOHabitaciontipo> {
    return this.consultarBd().then(data => {
      if (!data) {
        return this.consultaFb();
      }
      return data;
    });
  }

  consultarBd(): Promise<any> {
    return this.storage.get("HabitacionTipos")
      .then(data => {
         this.ArrayTipoHAB = JSON.parse(data) as Array<DTOHabitaciontipo>;
         return this.ArrayTipoHAB;
        // return this.ArrayTipoHAB.forEach(Hab =>{
        //   if(Hab.HTIid == id)  
        //     this.habitacionTipo = Hab;       
        //     return this.habitacionTipo;  
        // });
      });
  }

  consultaFb() {
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
            .get()
            .then(data =>{
              this.ArrayTipoHAB =  new Array<DTOHabitaciontipo>();
              data.forEach(doc => {
                let tipoHab = new DTOHabitaciontipo;
                tipoHab = doc.data() as DTOHabitaciontipo;
                this.ArrayTipoHAB.push(tipoHab);
              });
              this.guardarBd();        
            });
        });
  }

  crear() {
    this.habitacionTipo = new DTOHabitaciontipo;
    this.habitacionTipo.HTIid = this.ArrayTipoHAB.length;
    
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
    this.storage.set("Hab_" + this.habitacionTipo.HTIid, JSON.stringify(this.habitacionTipo));
  }

  guardarEstablecimiento() {
  }

  BuscarHabitacionTipo(id: number) : DTOHabitaciontipo {
        
    this.ArrayTipoHAB.forEach(Hab =>{
      if(Hab.HTIid == id){
        this.habitacionTipo = Hab;
      }
    });
    return this.habitacionTipo;
  }
}
