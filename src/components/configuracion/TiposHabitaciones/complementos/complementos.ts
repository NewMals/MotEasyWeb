import { Component, OnInit, Input } from '@angular/core';
import { ComplementoProvider } from '../../../../providers/general/complemento';
import { DTOcomplemento } from '../../../../modelos/DTOcomplemento';
import { DTOHabitaciontipo } from '../../../../modelos/DTOhabitacion';

/**
 * Generated class for the ComplementosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'complementos',
  templateUrl: 'complementos.html'
})
export class ComplementosComponent implements OnInit {

  text: string;
  ArrayComplementos = new Array<DTOcomplemento>();
  @Input() habitacion : DTOHabitaciontipo;
  
  constructor(
    private COMservice: ComplementoProvider
  ) {
    console.log('Hello ComplementosComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit(): void {
    this.COMservice.inicializar().then(data =>{
      this.ArrayComplementos = data;
    }); 
  }

  checkComplemento(){
    
  }
}
