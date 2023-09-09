import { AbstractControl } from '@angular/forms';
import { find } from 'lodash-es';
export class MyValidators {
    static isPriceValid(control: AbstractControl) {
        const value = control.value;
        if (value > 10000) {
            return { price_invalid: true };
        }
        return null;
    }
    static isCedulaValid(control: AbstractControl) {
        const cedula = control.value;
        if (cedula?.length == 10) {
            let tercerDigito = parseInt(cedula.substring(2, 3));
            if (tercerDigito < 6) {
                // El ultimo digito se lo considera dígito verificador
                let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
                let verificador = parseInt(cedula.substring(9, 10));
                let suma: number = 0;
                let digito: number = 0;
                for (let i = 0; i < (cedula.length - 1); i++) {
                    digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];
                    suma += ((parseInt((digito % 10) + '') + (parseInt((digito / 10) + ''))));
                }
                suma = Math.round(suma);
                if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10) == verificador)) {
                    return null
                } else if ((10 - (Math.round(suma % 10))) == verificador) {
                    return null
                } else {
                    return { cedula_invalid: true };
                }
            } else {
                return { cedula_invalid: true };
            }
        } else {
            return { cedula_invalid: true };
        }
    }
   
}
