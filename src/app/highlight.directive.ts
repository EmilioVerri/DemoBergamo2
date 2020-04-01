import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
@Input('appHighlight') highlightColor: string;
  constructor(private el: ElementRef) { 
    //el.nativeElement.style.backgroundColor='yellow';
    //el.nativeElement.style.color='red';
    //si possono tenere dentro ma non servono se c'è il mouse enter e leave
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }

}