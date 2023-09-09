
import { get, set } from 'lodash-es';
import { IusuarioRolAplicacion } from '../interfaces/IusuarioRolAplicacion';

export class UsuarioRolAplicacion implements IusuarioRolAplicacion {
    constructor(data) {
        set(this, 'data', data);
    }

    get codigo(): number {
        return get(this, 'data.codigo');
    }
    set codigo(value: number) {
        set(this, 'data.codigo', value);
    }

    get codRolAplicacion(): number {
        return get(this, 'data.codRolAplicacion');
    }
    set codRolAplicacion(value: number) {
        set(this, 'data.codRolAplicacion', value);
    }

    get codUsuario(): number {
        return get(this, 'data.codUsuario');
    }
    set codUsuario(value: number) {
        set(this, 'data.codUsuario', value);
    }

    get rolAplicacion(): any {
        return get(this, 'data.rolAplicacion');
    }
    set rolAplicacion(value: any) {
        set(this, 'data.rolAplicacion', value);
    }

    get usuario(): any {
        return get(this, 'data.usuario');
    }
    set usuario(value: any) {
        set(this, 'data.usuario', value);
    }
    
    get fechaAsignacion(): string {
        return get(this, 'data.fechaAsignacion');
    }
    set fechaAsignacion(value: string) {
        set(this, 'data.fechaAsignacion', value);
    }

    get fechaFinalizacion(): string {
        return get(this, 'data.fechaFinalizacion');
    }
    set fechaFinalizacion(value: string) {
        set(this, 'data.fechaFinalizacion', value);
    }

    get estado(): string {
        return get(this, 'data.estado');
    }
    set estado(value: string) {
        set(this, 'data.estado', value);
    }

    get codigoRolAplicacionRecurso(): number {
        return get(this, 'data.codigoRolAplicacionRecurso');
    }
    set codigoRolAplicacionRecurso(value: number) {
        set(this, 'data.codigoRolAplicacionRecurso', value);
    }
    
    get rolAplicacionRecurso(): any {
        return get(this, 'data.rolAplicacionRecurso');
    }
    set rolAplicacionRecurso(value: any) {
        set(this, 'data.rolAplicacionRecurso', value);
    }
}
