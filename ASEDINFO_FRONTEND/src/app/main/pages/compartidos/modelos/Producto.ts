
import { get, set } from 'lodash-es';
import { Iproducto } from '../interfaces/Iproducto';
export class Producto implements Iproducto {

    constructor(data) {
        set(this, 'data', data);
    }

    get codigo(): number {
        return get(this, 'data.codigo');
    }
    set codigo(value: number) {
        set(this, 'data.codigo', value);
    }

    get codModulo(): number {
        return get(this, 'data.codModulo');
    }
    set codModulo(value: number) {
        set(this, 'data.codModulo', value);
    }

    get codCategoria(): number {
        return get(this, 'data.codCategoria');
    }
    set codCategoria(value: number) {
        set(this, 'data.codCategoria', value);
    }

    get descripcion(): string {
        return get(this, 'data.descripcion');
    }
    set descripcion(value: string) {
        set(this, 'data.descripcion', value);
    }

    get precioCosto(): number {
        return get(this, 'data.precioCosto');
    }
    set precioCosto(value: number) {
        set(this, 'data.precioCosto', value);
    }

    get precioMayoreo(): number {
        return get(this, 'data.precioMayoreo');
    }
    set precioMayoreo(value: number) {
        set(this, 'data.precioMayoreo', value);
    }

    get numExistenciaActual(): number {
        return get(this, 'data.numExistenciaActual');
    }
    set numExistenciaActual(value: number) {
        set(this, 'data.numExistenciaActual', value);
    }

    get numExistenciaMinima(): number {
        return get(this, 'data.numExistenciaMinima');
    }
    set numExistenciaMinima(value: number) {
        set(this, 'data.numExistenciaMinima', value);
    }

    get fechaRegistra(): string {
        return get(this, 'data.fechaRegistra');
    }
    set fechaRegistra(value: string) {
        set(this, 'data.fechaRegistra', value);
    }

    get estado(): string {
        return get(this, 'data.estado');
    }
    set estado(value: string) {
        set(this, 'data.estado', value);
    }

    get modulo(): any {
        return get(this, 'data.modulo');
    }
    set modulo(value: any) {
        set(this, 'data.modulo', value);
    }

    get categoria(): any {
        return get(this, 'data.categoria');
    }
    set categoria(value: any) {
        set(this, 'data.categoria', value);
    }

}
