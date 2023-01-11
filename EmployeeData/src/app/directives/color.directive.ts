import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[empdataColor]'
})
export class ColorDirective {

  constructor(private el:ElementRef) {
    console.log(el,"HighlightDiewctive");
   }
  @HostListener("mouseover") mouseOver(){
    this.el.nativeElement.style.backgroundColor="yellow";
  }
  @HostListener("mouseout") mouseOut(){
    this.el.nativeElement.style.backgroundColor="";
  }
}
