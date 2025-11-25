import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Directive({
  selector: '[appCardStyle]'
})
export class CardStyle implements OnInit, OnChanges {
  
  
  @Input() borderColor: string = '#007bff'; // لون الـ Border (أزرق)
  @Input() shadowColor: string = 'rgba(0, 0, 0, 0.15)'; // لون الظل
  

  private originalShadow: string = '0 4px 8px rgba(0, 0, 0, 0.15)';
  private hoverShadow: string = '0 12px 24px rgba(0, 0, 0, 0.3)';

  constructor(public ele: ElementRef) {
    
  }

  
  ngOnChanges(changes: SimpleChanges): void {
   
    
    if (changes['borderColor'] && !changes['borderColor'].firstChange) {
     
      this.ele.nativeElement.style.border = `2px solid ${this.borderColor}`;
    }
    
    if (changes['shadowColor'] && !changes['shadowColor'].firstChange) {
     
      this.originalShadow = `0 4px 8px ${this.shadowColor}`;
      this.ele.nativeElement.style.boxShadow = this.originalShadow;
    }
  }

  
  ngOnInit(): void {
    
    
    this.ele.nativeElement.style.border = `2px solid ${this.borderColor}`;
    
    
    this.ele.nativeElement.style.padding = '15px';
    
    
    this.ele.nativeElement.style.borderRadius = '12px';
    
   
    this.ele.nativeElement.style.boxShadow = this.originalShadow;
    
   
    this.ele.nativeElement.style.transition = 'all 0.3s ease-in-out';
    
   
    this.ele.nativeElement.style.backgroundColor = 'white';
  }

  
  @HostListener('mouseover') onMouseOver() {
    
    this.ele.nativeElement.style.boxShadow = this.hoverShadow;
    
    
    this.ele.nativeElement.style.transform = 'translateY(-5px)';
    
   
    this.ele.nativeElement.style.borderColor = '#0056b3';
  }

  
  @HostListener('mouseout') onMouseOut() {
    
    this.ele.nativeElement.style.boxShadow = this.originalShadow;
    
    
    this.ele.nativeElement.style.transform = 'translateY(0)';
    
    
    this.ele.nativeElement.style.borderColor = this.borderColor;
  }
}