import { Component, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdDirective } from './wizard.directive';

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

  @Input() ads : Array<any>;

  currentAdIndex: number = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    console.log('Hello WizardComponent Component');
  }

  mostrarComponent(){

  }

  CambiarComponente(){

  }

  ngOnInit() {
    this.loadComponent();
    //this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<any>componentRef.instance).data = adItem.data;
  }

  getAds() {
    // this.interval = setInterval(() => {
      this.loadComponent();
    // }, 3000);
  }

}
