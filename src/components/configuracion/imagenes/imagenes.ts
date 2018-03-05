import { Component } from '@angular/core';

/**
 * Generated class for the ImagenesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'imagenes',
  templateUrl: 'imagenes.html'
})
export class ImagenesComponent {

  text: string;

  constructor() {
    console.log('Hello ImagenesComponent Component');
    this.text = 'Hello World';
  }

}
