import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ReestablecerPassComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'reestablecer-pass',
  templateUrl: 'reestablecer-pass.html'
})
export class ReestablecerPassComponent {

  text: string;

  constructor(public viewCtrl: ViewController) {
    console.log('Hello ReestablecerPassComponent Component');
    this.text = 'Hello World';
  }

  CerrarModal() {
    this.viewCtrl.dismiss();
  }

}
