import { Validators } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[verificarCedula][ngModel]'
})
export class VerificarCedulaDirective implements Validators{

  constructor() { }

}
