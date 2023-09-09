
import { get, set } from 'lodash-es';
import { IusuarioAplicacion } from '../interfaces/IusuarioAplicacion';

export class UsuarioAplicacion implements IusuarioAplicacion {
    constructor(data) {
        set(this, 'data', data);
    }

    get codigo(): number {
        return get(this, 'data.codigo');
    }
    set codigo(value: number) {
        set(this, 'data.codigo', value);
    }

    get codAplicacion(): number {
        return get(this, 'data.codAplicacion');
    }
    set codAplicacion(value: number) {
        set(this, 'data.codAplicacion', value);
    }

    get codUsuario(): number {
        return get(this, 'data.codUsuario');
    }
    set codUsuario(value: number) {
        set(this, 'data.codUsuario', value);
    }

    get aplicacion(): any {
        return get(this, 'data.aplicacion');
    }
    set aplicacion(value: any) {
        set(this, 'data.aplicacion', value);
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
}
