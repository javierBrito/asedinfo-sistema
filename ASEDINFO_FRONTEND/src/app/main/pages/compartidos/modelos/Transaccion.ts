
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
    get descripcion(): string {
        return get(this, 'data.descripcion');
    }
    set descripcion(value: string) {
        set(this, 'data.descripcion', value);
    }
    get precioVenta(): number {
        return get(this, 'data.precioVenta');
    }
    set precioVenta(value: number) {
        set(this, 'data.precioVenta', value);
    }
    get numProductoVenta(): number {
        return get(this, 'data.numProductoVenta');
    }
    set numProductoVenta(value: number) {
        set(this, 'data.numProductoVenta', value);
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

    get colorFila(): string {
        return get(this, 'data.colorFila');
    }
    set colorFila(value: string) {
        set(this, 'data.colorFila', value);
    }
}
