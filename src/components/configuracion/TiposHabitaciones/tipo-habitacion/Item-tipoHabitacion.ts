import { Component, Input } from '@angular/core';
import { DTOHabitaciontipo } from '../../../../modelos/DTOhabitacion';
import { DTOfoto } from '../../../../modelos/DTOfoto';

/**
 * Generated class for the TipoHabitacionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'Item-tipoHabitacion',
  templateUrl: 'Item-tipoHabitacion.html'
})
export class ItemTipoHabitacionComponent {

  @Input() Tipohabitacion = new DTOHabitaciontipo;
  text: string;
  foto : string;

  constructor() {
    console.log('Hello TipoHabitacionComponent Component');
    this.text = 'Hello World';
    this.obtenerFoto(); 
    
  }

  obtenerFoto(){
    if(this.Tipohabitacion.HTIfotos)
    this.foto = this.Tipohabitacion.HTIfotos.find(elem => elem.FOTprincipal === true).FOTurl;


  
  }

}
