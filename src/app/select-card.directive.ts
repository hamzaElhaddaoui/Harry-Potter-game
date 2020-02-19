import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelectCard]'
})
export class SelectCardDirective {
  private elementPrecedent:any=null;
  private renderPrecedent:any=null;
  constructor(private el : ElementRef,private render :Renderer2) {}

  @HostListener('mouseenter', ['$event']) mouseEnter(event : Event){
    this.render.setStyle(this.el.nativeElement,'background-color','lightslategray');
  }

  @HostListener('mouseleave', ['$event']) mouseLeave(event : Event){
    this.render.setStyle(this.el.nativeElement,'background-color','white');
  }

  // @HostListener('click', ['$event']) mouseClick(event : Event){
  //   if(this.elementPrecedent!=null && this.renderPrecedent !=null){
  //     this.renderPrecedent.setStyle(this.elementPrecedent,'background-color','black');
  //   }
  //   this.render.setStyle(this.el.nativeElement,'border','3px solid blue');
  //   this.elementPrecedent=this.el.nativeElement;
  //   this.renderPrecedent = this.render;
  // }
}
