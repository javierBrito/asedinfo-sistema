import { IusuarioCedula } from '../interfaces/IusuarioCedula';
import { get, set } from 'lodash-es';
export class UsuarioCedula implements IusuarioCedula{
    constructor(data) {
        set(this, 'data', data);
    }
    get cedula(): string {
        return get(this, 'data.cedula');
    }
    get cedulaMadre(): string {
        return get(this, 'data.cedulaMadre');
    }
    get cedulaPadre(): string {
        return get(this, 'data.cedulaPadre');
    }
    get codCondicionCedulado(): number {
        return get(this, 'data.codCondicionCedulado');
    }
    get codDomicilio(): number {
        return get(this, 'data.codDomicilio');
    }
    get codEstadoCivil(): number {
        return get(this, 'data.codEstadoCivil');
    }
    get codInstruccion(): number {
        return get(this, 'data.codInstruccion');
    }
    get codLugarMatrimonio(): number {
        return get(this, 'data.codLugarMatrimonio');
    }
    get codLugarNacimiento(): number {
        return get(this, 'data.codLugarNacimiento');
    }
    get codNacionalidad(): number {
        return get(this, 'data.codNacionalidad');
    }
    get codProfesion(): string {
        return get(this, 'data.codProfesion');
    }
    get codSexo(): number {
        return get(this, 'data.codSexo');
    }
    get fechaExpedicionCed(): string {
        return get(this, 'data.fechaExpedicionCed');
    }
    get fechaFallecimiento(): string {
        return get(this, 'data.fechaFallecimiento');
    }
    get fechaMatrimonio(): string {
        return get(this, 'data.fechaMatrimonio');
    }
    get fechaNacimiento(): string {
        return get(this, 'data.fechaNacimiento');
    }
    get nombreCalle(): string {
        return get(this, 'data.nombreCalle');
    }
    get nombreConyuge(): string {
        return get(this, 'data.nombreConyuge');
    }
    get nombreMadre(): string {
        return get(this, 'data.nombreMadre');
    }
    get nombrePadre(): string {
        return get(this, 'data.nombrePadre');
    }
    get nombres(): string {
        return get(this, 'data.nombres');
    }
    get numeroCasa(): string {
        return get(this, 'data.numeroCasa');
    }
}
