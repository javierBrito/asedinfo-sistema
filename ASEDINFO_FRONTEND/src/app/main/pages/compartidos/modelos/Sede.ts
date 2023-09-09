
import { get, set } from 'lodash-es';
import { Isede } from '../interfaces/Isede';
export class Sede implements Isede {

    constructor(data) {
        set(this, 'data', data);
    }

    get codigo(): number {
        return get(this, 'data.codigo');
    }
    set codigo(value: number) {
        set(this, 'data.codigo', value);
    }

    get nombre(): string {
        return get(this, 'data.nombre');
    }
    set nombre(value: string) {
        set(this, 'data.nombre', value);
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

    get codigoSedeSuperior(): number {
        return get(this, 'data.codigoSedeSuperior');
    }
    set codigoSedeSuperior(value: number) {
        set(this, 'data.codigoSedeSuperior', value);
    }

    get sedeSuperior(): any {
        return get(this, 'data.sedeSuperior');
    }
    set sedeSuperior(value: any) {
        set(this, 'data.sedeSuperior', value);
    }

}
