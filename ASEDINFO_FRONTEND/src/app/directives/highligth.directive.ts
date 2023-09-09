import { AfterViewChecked, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[highligth]'
})
export class HighligthDirective implements OnChanges, AfterViewChecked {
  private viewRendered: boolean;
  @Input('search') word: string;
  constructor(
    private el: ElementRef
  ) {
    this.word = '';
    this.viewRendered = false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["word"]) {
      this.highligthSearchTerm();
    }
  }
  ngAfterViewChecked(): void {
    this.viewRendered = true
  }
  /**
   * name
   */
  public highligthSearchTerm() {
    if (!this.word || this.word.length < 3) {
      if (this.viewRendered) {
        //Eliminar marcas
        this.removeMarks();
      }
    } else {
      if (this.el.nativeElement) {
        // Limpiar
        this.removeMarks();
        //Buscar
        this.putMarks();
      }
    }
  }
  private putMarks() {
    const searchRegex = new RegExp(this.word, 'gmi');
    this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.replace(searchRegex, (match: any) => `<mark>${match}</mark>`)
  }
  private removeMarks() {
    this.el.nativeElement.querySelectorAll("*").forEach((element: any) => {
      const regex = new RegExp('<mark>|</mark>', 'gi');
      const cleanText = element.parentNode.innerHTML.replace(regex, '');
      element.parentNode.innerHTML = cleanText;
    });
  }
}
