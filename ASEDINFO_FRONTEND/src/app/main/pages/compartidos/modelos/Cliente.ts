
import { get, set } from 'lodash-es';
import { Icliente } from '../interfaces/Icliente';

export class Cliente implements Icliente {

    constructor(data) {
        set(this, 'data', data);
    }

    get codigo(): number {
        return get(this, 'data.codigo');
    }
    set codigo(value: number) {
        set(this, 'data.codigo', value);
    }

    get tipoCliente(): string {
        return get(this, 'data.tipoCliente');
    }
    set tipoCliente(value: string) {
        set(this, 'data.tipoCliente', value);
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
    set codUscodPersonauario(value: number) {
        set(this, 'data.codPersona', value);
    }

    get persona(): any {
        return get(this, 'data.persona');
    }
    set persona(value: any) {
        set(this, 'data.persona', value);
    }

}
