import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[paso-paso]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}