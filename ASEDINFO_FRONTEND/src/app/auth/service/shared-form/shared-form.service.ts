import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './../../../utils/validators';

@Injectable({
  providedIn: 'root'
})
export class SharedFormService {

  today = new Date();

  constructor(
    private fb: FormBuilder
  ) { }

  sharedFormAutoridadInstitu(): FormGroup {
    const formAutoridadInstitu = this.fb.group({
      txtCedula: new FormControl('', Validators.compose([MyValidators.isCedulaValid, Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$")])),
      txtPasaporte: new FormControl(''),
      txtNombreyApell: new FormControl('', Validators.required),
      txtTelefono: new FormControl('', Validators.required),
      txtCorreo: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      lstCargo: new FormControl({ value: '', disabled: true }),
      txtRegimenLabo: new FormControl('', Validators.required),
      txtFechaCargo: new FormControl('', Validators.required),
    });
    return formAutoridadInstitu;
  }
}
