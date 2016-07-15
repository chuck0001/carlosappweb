import {Directive,ElementRef,Renderer} from '@angular/core';

@Directive({
    selector: '[autoGrow]',
    host:{
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})


export class PerfilImpresionDirective {
    constructor (private el: ElementRef, private renderer: Renderer){

    }
    onFocus(){
        
        this.renderer.setElementStyle(this.el.nativeElement,'width','250');
        this.renderer.setElementStyle(this.el.nativeElement,'width','250');
        this.renderer.setElementStyle(this.el.nativeElement,'width','250');
        this.renderer.setElementStyle(this.el.nativeElement,'width','250');
        this.renderer.setElementStyle(this.el.nativeElement,'width','250');

    }
    onBlur(){
    this.renderer.setElementStyle(this.el.nativeElement,'width','100');
    }
}
