
import { get, set } from 'lodash-es';
import { Itransaccion } from '../interfaces/Itransaccion';
export class Transaccion implements Itransaccion {

    constructor(data) {
        set(this, 'data', data);
    }

    get codigo(): number {
        return get(this, 'data.codigo');
    }
    set codigo(value: number) {
        set(this, 'data.codigo', value);
    }
    get codCliente(): number {
        return get(this, 'data.codCliente');
    }
    set codCliente(value: number) {
        set(this, 'data.codCliente', value);
    }
    get codProducto(): number {
        return get(this, 'data.codProducto');
    }
    set codProducto(value: number) {
        set(this, 'data.codProducto', value);
    }
    get codModulo(): number {
        return get(this, 'data.codModulo');
    }
    set codModulo(value: number) {
        set(this, 'data.codModulo', value);
    }
    get codOperacion(): number {
        return get(this, 'data.codOperacion');
    }
    set codOperacion(value: number) {
        set(this, 'data.codOperacion', value);
    }
    get descripcion(): string {
        return get(this, 'data.descripcion');
    }
    set descripcion(value: string) {
        set(this, 'data.descripcion', value);
    }
    get precio(): number {
        return get(this, 'data.precio');
    }
    set precio(value: number) {
        set(this, 'data.precio', value);
    }
    get numProducto(): number {
        return get(this, 'data.numProducto');
    }
    set numProducto(value: number) {
        set(this, 'data.numProducto', value);
    }
    get numExistenciaActual(): number {
        return get(this, 'data.numExistenciaActual');
    }
    set numExistenciaActual(value: number) {
        set(this, 'data.numExistenciaActual', value);
    }
    get numMes(): number {
        return get(this, 'data.numMes');
    }
    set numMes(value: number) {
        set(this, 'data.numMes', value);
    }
    get fechaInicio(): string {
        return get(this, 'data.fechaInicio');
    }
    set fechaInicio(value: string) {
        set(this, 'data.fechaInicio', value);
    }
    get fechaFin(): string {
        return get(this, 'data.fechaFin');
    }
    set fechaFin(value: string) {
        set(this, 'data.fechaFin', value);
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

    get cliente(): any {
        return get(this, 'data.cliente');
    }
    set cliente(value: any) {
        set(this, 'data.cliente', value);
    }

    get producto(): any {
        return get(this, 'data.producto');
    }
    set producto(value: any) {
        set(this, 'data.producto', value);
    }

    get modulo(): any {
        return get(this, 'data.modulo');
    }
    set modulo(value: any) {
        set(this, 'data.modulo', value);
    }

    get operacion(): any {
        return get(this, 'data.operacion');
    }
    set operacion(value: any) {
        set(this, 'data.operacion', value);
    }

    get colorFila(): string {
        return get(this, 'data.colorFila');
    }
    set colorFila(value: string) {
        set(this, 'data.colorFila', value);
    }

    get descripcionProducto(): string {
        return get(this, 'data.descripcionProducto');
    }
    set descripcionProducto(value: string) {
        set(this, 'data.descripcionProducto', value);
    }

    get nombreCliente(): string {
        return get(this, 'data.nombreCliente');
    }
    set nombreCliente(value: string) {
        set(this, 'data.nombreCliente', value);
    }

    get celular(): string {
        return get(this, 'data.celular');
    }
    set celular(value: string) {
        set(this, 'data.celular', value);
    }
}
