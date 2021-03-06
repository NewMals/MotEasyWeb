import { Component, Input, ViewChild, ComponentFactoryResolver, ComponentRef, OnDestroy } from '@angular/core';
import { WizardDirective } from './wizard.directive';
import { NavController } from 'ionic-angular';


/**
 * Generated class for the WizardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wizard',
  templateUrl: 'wizard.html'
})
export class WizardComponent {

  @Input() paginas: Array<any>;
  posicion: number;
  @ViewChild(WizardDirective) adHost: WizardDirective;
  interval: any;
  componenteActual: number;
  finalizar: boolean = false;
  componentRef: ComponentRef<any>;

  constructor(public navCtrl: NavController
    , private componentFactoryResolver: ComponentFactoryResolver) {
    console.log('Hello WizardComponent Component');
  }

  ngOnInit() {
    this.ComponenteInicial();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  ComponenteInicial() {
    this.posicion = this.paginas.findIndex(index => index.activo === true);
    let componenteActual = this.paginas[this.posicion];
    this.cargarComponente(componenteActual);
  }

  Continuar() {
    this.paginas[this.posicion].activo = false;
    this.posicion = (this.posicion + 1) % this.paginas.length;
    this.paginas[this.posicion].activo = true;
    this.cargarComponente(this.paginas[this.posicion]);
    if (this.posicion + 1 == this.paginas.length) {
      this.finalizar = true;
    } else {
      this.finalizar = false;
    }
  }

  Regresar() {
    this.paginas[this.posicion].activo = false;
    this.posicion = (this.posicion - 1) % this.paginas.length;
    this.paginas[this.posicion].activo = true;
    this.cargarComponente(this.paginas[this.posicion]);
    if (this.posicion + 1 == this.paginas.length) {
      this.finalizar = true;
    } else {
      this.finalizar = false;
    }
  }

  Finalizar() {
    this.navCtrl.setRoot("ConfiguracionPage");
  }

  cargarComponente(ComponenteActual) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponenteActual.component);
    let viewContainerRef = this.adHost.viewContainerRef;
    
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
    // (<any>componentRef.instance).data = ComponenteActual.data;
  }

  getAds() {
    // this.interval = setInterval(() => {
    //this.loadComponent();
    // }, 3000);
  }

}
