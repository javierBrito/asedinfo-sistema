
import { get, set } from 'lodash-es';
import { IrolAplicacion } from '../interfaces/IrolAplicacion';

export class RolAplicacion implements IrolAplicacion {

    constructor(data) {
        set(this, 'data', data);
    }

    get codigo(): number {
        return get(this, 'data.codigo');
    }
    set codigo(value: number) {
        set(this, 'data.codigo', value);
    }

    get nombreRol(): string {
        return get(this, 'data.nombreRol');
    }
    set nombreRol(value: string) {
        set(this, 'data.nombreRol', value);
    }

    get descripcionRol(): string {
        return get(this, 'data.descripcionRol');
    }
    set descripcionRol(value: string) {
        set(this, 'data.descripcionRol', value);
    }

    get fecInactivacion(): string {
        return get(this, 'data.fecInactivacion');
    }
    set fecInactivacion(value: string) {
        set(this, 'data.fecInactivacion', value);
    }

    get estadoRol(): string {
        return get(this, 'data.estadoRol');
    }
    set estadoRol(value: string) {
        set(this, 'data.estadoRol', value);
    }

    get enumRolSeguridad(): string {
        return get(this, 'data.enumRolSeguridad');
    }
    set enumRolSeguridad(value: string) {
        set(this, 'data.enumRolSeguridad', value);
    }

    get codAplicacion(): number {
        return get(this, 'data.codAplicacion');
    }
    set codAplicacion(value: number) {
        set(this, 'data.codAplicacion', value);
    }

    get aplicacion(): any {
        return get(this, 'data.aplicacion');
    }
    set aplicacion(value: any) {
        set(this, 'data.aplicacion', value);
    }
}
