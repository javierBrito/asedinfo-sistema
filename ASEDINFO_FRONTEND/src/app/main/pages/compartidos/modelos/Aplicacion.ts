
import { get, set } from 'lodash-es';
import { Iaplicacion } from '../interfaces/Iaplicacion';
export class Aplicacion implements Iaplicacion {

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

    get prefijo(): string {
        return get(this, 'data.prefijo');
    }
    set prefijo(value: string) {
        set(this, 'data.prefijo', value);
    }

    get tipo(): string {
        return get(this, 'data.tipo');
    }
    set tipo(value: string) {
        set(this, 'data.tipo', value);
    }

    get url(): string {
        return get(this, 'data.url');
    }
    set url(value: string) {
        set(this, 'data.url', value);
    }

    get estado(): string {
        return get(this, 'data.estado');
    }
    set estado(value: string) {
        set(this, 'data.estado', value);
    }

    get seleccionada(): boolean {
        return get(this, 'data.seleccionada');
    }
    set seleccionada(value: boolean) {
        set(this, 'data.seleccionada', value);
    }
}
