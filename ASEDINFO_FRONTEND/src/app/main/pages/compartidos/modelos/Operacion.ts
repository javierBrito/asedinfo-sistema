
import { get, set } from 'lodash-es';
import { Ioperacion } from '../interfaces/Ioperacion';
export class Operacion implements Ioperacion {

    constructor(data) {
        set(this, 'data', data);
    }

    get codigo(): number {
        return get(this, 'data.codigo');
    }
    set codigo(value: number) {
        set(this, 'data.codigo', value);
    }
    get descripcion(): string {
        return get(this, 'data.descripcion');
    }
    set descripcion(value: string) {
        set(this, 'data.descripcion', value);
    }
    get nemonico(): string {
        return get(this, 'data.nemonico');
    }
    set nemonico(value: string) {
        set(this, 'data.nemonico', value);
    }
    get estado(): string {
        return get(this, 'data.estado');
    }
    set estado(value: string) {
        set(this, 'data.estado', value);
    }

}
