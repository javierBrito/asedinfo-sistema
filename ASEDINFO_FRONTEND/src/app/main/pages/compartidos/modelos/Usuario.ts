
import { get, set } from 'lodash-es';
import { Iusuario } from '../interfaces/Iusuario';
export class Usuario implements Iusuario {

    constructor(data) {
        set(this, 'data', data);
    }

    get codigo(): number {
        return get(this, 'data.codigo');
    }
    set codigo(value: number) {
        set(this, 'data.codigo', value);
    }

    get cambioClave(): string {
        return get(this, 'data.cambioClave');
    }
    set cambioClave(value: string) {
        set(this, 'data.cambioClave', value);
    }
    
    get actualizacionDatos(): string {
        return get(this, 'data.actualizacionDatos');
    }
    set actualizacionDatos(value: string) {
        set(this, 'data.actualizacionDatos', value);
    }

    get codSede(): number {
        return get(this, 'data.codSede');
    }
    set codSede(value: number) {
        set(this, 'data.codSede', value);
    }

    get codPersona(): number {
        return get(this, 'data.codPersona');
    }
    set codPersona(value: number) {
        set(this, 'data.codPersona', value);
    }

    get estado(): string {
        return get(this, 'data.estado');
    }
    set estado(value: string) {
        set(this, 'data.estado', value);
    }

    get sede(): any {
        return get(this, 'data.sede');
    }
    set sede(value: any) {
        set(this, 'data.sede', value);
    }

    get persona(): any {
        return get(this, 'data.persona');
    }
    set persona(value: any) {
        set(this, 'data.persona', value);
    }
}
