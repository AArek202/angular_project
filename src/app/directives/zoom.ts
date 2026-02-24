import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appZoom]',
})
export class Zoom {

  constructor(private elementref: ElementRef) {
    this.elementref.nativeElement.style.transform = ' scale(1)';
  }

  @HostListener('mouseover') mouseover() {
    this.elementref.nativeElement.style.transform = ' scale(1.5)';
  }

  @HostListener('mouseout') mouseout() {
    this.elementref.nativeElement.style.transform = ' scale(1)';
  }

}
