import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';
import { validateSentence } from '../utils/validate-textarea';

@Directive({
  selector: '[invalidBorder]'
})
export class InvalidBorderDirective {

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  @HostListener('change', ['$event'])
  onChangeText(evt: Event) {
    const isValidSentence = validateSentence(evt);
    const color = isValidSentence ? 'initial' : 'red';
    this.border(color);
  }

  private border(color: string) {
    this.renderer.setStyle(this.elem.nativeElement, 'border-color', color);
  }
}
