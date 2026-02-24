import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShadow]',
})
export class Shadow {

  constructor(private elementref: ElementRef) {
    this.elementref.nativeElement.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    this.elementref.nativeElement.style.transform = ' scale(1)';
    this.elementref.nativeElement.style.transition = 'all 0.3s ease';
  }

  @HostListener('mouseover') mouseover() {
    this.elementref.nativeElement.style.boxShadow = '0 4px 8px rgba(0,0,0,0.5)';
    this.elementref.nativeElement.style.transform = ' scale(1.05)';

  }

  @HostListener('mouseout') mouseout() {
    this.elementref.nativeElement.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    this.elementref.nativeElement.style.transform = ' scale(1)';
  }
}
