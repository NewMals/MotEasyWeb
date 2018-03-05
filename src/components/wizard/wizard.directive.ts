import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[paso-paso]',
})
export class WizardDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}