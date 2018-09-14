
import { Injectable } from '@angular/core';
import { DTOtarifa } from '../../modelos/DTOtarifa';

/*
  Generated class for the TarifasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TarifasProvider {

  ArrayTarifa: Array<DTOtarifa> = new Array<DTOtarifa>();

  constructor() {
    console.log('Hello TarifasProvider Provider');
  }

  EliminarTarifa(tarifa: DTOtarifa): Array<DTOtarifa> {
    let posicion: number;
    posicion = this.ArrayTarifa.findIndex(index => index === tarifa);
    this.ArrayTarifa.splice(posicion, 1);
    return this.ArrayTarifa;
  }

  AgregarTarifa(): Array<DTOtarifa> {
    let tarifa = new DTOtarifa;
    tarifa.TARid = this.ArrayTarifa.length + 1;
    tarifa.TARcantHoras = 4;
    tarifa.TARvalor = 50000;
    this.ArrayTarifa.push(tarifa);
    return this.ArrayTarifa;
  }
}
