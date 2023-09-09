
import { get, set } from 'lodash-es';
import { Irecurso } from '../interfaces/Irecurso';
export class Recurso implements Irecurso {

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

    get url(): string {
        return get(this, 'data.url');
    }
    set url(value: string) {
        set(this, 'data.url', value);
    }

    get codigoPadre(): number {
        return get(this, 'data.codigoPadre');
    }
    set codigoPadre(value: number) {
        set(this, 'data.codigoPadre', value);
    }

    get nivel(): number {
        return get(this, 'data.nivel');
    }
    set nivel(value: number) {
        set(this, 'data.nivel', value);
    }

    get estado(): string {
        return get(this, 'data.estado');
    }
    set estado(value: string) {
        set(this, 'data.estado', value);
    }

    get codigoAplicacion(): number {
        return get(this, 'data.codigoAplicacion');
    }
    set codigoAplicacion(value: number) {
        set(this, 'data.codigoAplicacion', value);
    }

    get aplicacion(): any {
        return get(this, 'data.aplicacion');
    }
    set aplicacion(value: any) {
        set(this, 'data.aplicacion', value);
    }

    get recursoPadre(): any {
        return get(this, 'data.recursoPadre');
    }
    set recursoPadre(value: any) {
        set(this, 'data.recursoPadre', value);
    }
}
