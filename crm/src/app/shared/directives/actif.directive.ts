import { Directive, OnChanges, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appActif]'
})
export class ActifDirective implements OnChanges {
  @Input() appActif: any;
  @HostBinding('class') nomClass: String;

  constructor() { }

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appActif);
  }

  private formatClass(state: any): String {
    return `actif-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }
}
