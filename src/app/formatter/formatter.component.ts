import { Component, OnChanges, Input, ElementRef } from '@angular/core';
import JSONFormatter from 'json-formatter-js';

@Component({
  selector: 'app-formatter',
  template: ''
})
export class FormatterComponent implements OnChanges {
  @Input() data: any;
  @Input() expandZoom: number;

  constructor( private element: ElementRef) {}

  ngOnChanges() {
    if(Object.keys(this.data).length === 0) return;
    
    this.element.nativeElement.innerHTML = '';
    const formatter = new JSONFormatter(this.data)
    formatter.openAtDepth(this.expandZoom);
    this.element.nativeElement.appendChild(formatter.render());


  }
}