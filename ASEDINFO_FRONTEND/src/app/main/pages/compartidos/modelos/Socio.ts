
import { get, set } from 'lodash-es';
import { Isocio } from '../interfaces/Isocio';

export class Socio implements Isocio {

    constructor(data) {
        set(this, 'data', data);
    }

    get codigo(): number {
        return get(this, 'data.codigo');
    }
    set codigo(value: number) {
        set(this, 'data.codigo', value);
    }

    get tipoSocio(): string {
        return get(this, 'data.tipoSocio');
    }
    set tipoSocio(value: string) {
        set(this, 'data.tipoSocio', value);
    }

    get estado(): string {
        return get(this, 'data.estado');
    }
    set estado(value: string) {
        set(this, 'data.estado', value);
    }

    get fechaInicio(): string {
        return get(this, 'data.fechaInicio');
    }
    set fechaInicio(value: string) {
        set(this, 'data.fechaInicio', value);
    }

    get codPersona(): number {
        return get(this, 'data.codPersona');
    }
    set codPersona(value: number) {
        set(this, 'data.codPersona', value);
    }

    get persona(): any {
        return get(this, 'data.persona');
    }
    set persona(value: any) {
        set(this, 'data.persona', value);
    }

}
