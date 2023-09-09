
import { get, set } from 'lodash-es';
import { IrolAplicacionRecurso } from '../interfaces/IrolAplicacionRecurso';

export class RolAplicacionRecurso implements IrolAplicacionRecurso {

    constructor(data) {
        set(this, 'data', data);
    }

    get codigo(): number {
        return get(this, 'data.codigo');
    }
    set codigo(value: number) {
        set(this, 'data.codigo', value);
    }

    get estado(): string {
        return get(this, 'data.estado');
    }
    set estado(value: string) {
        set(this, 'data.estado', value);
    }

    get codigoRolAplicacion(): number {
        return get(this, 'data.codigoRolAplicacion');
    }
    set codigoRolAplicacion(value: number) {
        set(this, 'data.codigoRolAplicacion', value);
    }

    get codigoRecurso(): number {
        return get(this, 'data.codigoRecurso');
    }
    set codigoRecurso(value: number) {
        set(this, 'data.codigoRecurso', value);
    }

    get rolAplicacion(): any {
        return get(this, 'data.rolAplicacion');
    }
    set rolAplicacion(value: any) {
        set(this, 'data.rolAplicacion', value);
    }

    get recurso(): any {
        return get(this, 'data.recurso');
    }
    set recurso(value: any) {
        set(this, 'data.recurso', value);
    }

}
