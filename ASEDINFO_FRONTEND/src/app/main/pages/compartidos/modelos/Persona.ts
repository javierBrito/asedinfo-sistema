
import { get, set } from 'lodash-es';
import { Ipersona } from '../interfaces/Ipersona';
export class Persona implements Ipersona {

    constructor(data) {
        set(this, 'data', data);
    }

    get codigo(): number {
        return get(this, 'data.codigo');
    }
    set codigo(value: number) {
        set(this, 'data.codigo', value);
    }

    get identificacion(): string {
        return get(this, 'data.identificacion');
    }
    set identificacion(value: string) {
        set(this, 'data.identificacion', value);
    }

    get cedula(): string {
        return get(this, 'data.cedula');
    }
    set cedula(value: string) {
        set(this, 'data.cedula', value);
    }

    get nombres(): string {
        return get(this, 'data.nombres');
    }
    set nombres(value: string) {
        set(this, 'data.nombres', value);
    }

    get apellidos(): string {
        return get(this, 'data.apellidos');
    }
    set apellidos(value: string) {
        set(this, 'data.apellidos', value);
    }

    get fechaNacimiento(): string {
        return get(this, 'data.fechaNacimiento');
    }
    set fechaNacimiento(value: string) {
        set(this, 'data.fechaNacimiento', value);
    }

    get direccion(): string {
        return get(this, 'data.direccion');
    }
    set direccion(value: string) {
        set(this, 'data.direccion', value);
    }
    
    get celular(): string {
        return get(this, 'data.celular');
    }
    set celular(value: string) {
        set(this, 'data.celular', value);
    }

    get correo(): string {
        return get(this, 'data.correo');
    }
    set correo(value: string) {
        set(this, 'data.correo', value);
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

    get usuario(): any {
        return get(this, 'data.usuario');
    }
    set usuario(value: any) {
        set(this, 'data.usuario', value);
    }

    get socio(): any {
        return get(this, 'data.socio');
    }
    set socio(value: any) {
        set(this, 'data.socio', value);
    }
}
