import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

//Class Decorator
@Directive({
  selector: '[appCardStyle]'
})
export class CardStyle implements OnInit, OnChanges {
//Property Decorator
  @Input() color1:string='gray';
  @Input() color2:string='blue';
//style cards
  constructor(public ele:ElementRef) {  
    //Step1 in the directive life cycle 
    // this.ele.nativeElement.style.border=`2px solid blue`;
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Step2 in the directive life cycle
    this.ele.nativeElement.style.backgroundColor=`${this.color2}`;
  }
  ngOnInit(): void {
    //Step3 in the directive life cycle 
    // this.ele.nativeElement.style.border=`2px solid ${this.color1}`;
    this.ele.nativeElement.style.padding=`10px`;
    this.ele.nativeElement.style.borderRadius=`15px`;
  }
  // Method Decorator
  @HostListener('mouseover') mouseOver(){
    this.ele.nativeElement.style.backgroundColor=`${this.color1}`;
  }

  @HostListener('mouseout') mouseOut(){
    this.ele.nativeElement.style.backgroundColor=`white`;
  }
}
