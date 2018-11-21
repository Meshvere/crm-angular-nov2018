import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: any;
  @HostBinding('class') nomClass: String;

  constructor() { }

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: any): String {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }
}
