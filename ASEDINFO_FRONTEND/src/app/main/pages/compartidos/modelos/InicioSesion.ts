
import { get, set } from 'lodash-es';
import { IinicioSesion } from '../interfaces/IinicioSesion';
export class InicioSesion implements IinicioSesion {

    constructor(data) {
        set(this, 'data', data);
    }

    get codigo(): number {
        return get(this, 'data.codigo');
    }
    set codigo(value: number) {
        set(this, 'data.codigo', value);
    }

    get ip(): string {
        return get(this, 'data.ip');
    }
    set ip(value: string) {
        set(this, 'data.ip', value);
    }

    get usuario(): string {
        return get(this, 'data.usuario');
    }
    set usuario(value: string) {
        set(this, 'data.usuario', value);
    }

    get prefijoAplicacion(): string {
        return get(this, 'data.prefijoAplicacion');
    }
    set prefijoAplicacion(value: string) {
        set(this, 'data.prefijoAplicacion', value);
    }

    get fecha(): string {
        return get(this, 'data.fecha');
    }
    set fecha(value: string) {
        set(this, 'data.fecha', value);
    }

}
