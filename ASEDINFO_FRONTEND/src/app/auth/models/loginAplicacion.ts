import { get, set } from 'lodash-es';
import { IloginAplicacion } from '../interface/IloginAplicacion';
import { Sede } from './sede';
export class LoginAplicacion implements IloginAplicacion {
    constructor(data) {
        set(this, 'data', data);
    }
    get codigoUsuario(): number {
        return get(this, 'data.codigoUsuario');
    }
    set codigoUsuario(value: number) {
        set(this, 'data.codigoUsuario', value);
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
    get nombre(): string {
        return get(this, 'data.nombre');
    }
    set nombre(value: string) {
        set(this, 'data.nombre', value);
    }
    get accesoConcedido(): boolean {
        return get(this, 'data.accesoConcedido');
    }
    set accesoConcedido(value: boolean) {
        set(this, 'data.accesoConcedido', value);
    }
    get observacion(): string {
        return get(this, 'data.observacion');
    }
    set observacion(value: string) {
        set(this, 'data.observacion', value);
    }
    get sede(): Sede {
        return get(this, 'data.sede');
    }
    set sede(value: Sede) {
        set(this, 'data.sede', value);
    }
}
