import { IpeiTipoPregunta } from './../../interface/PEI/ipeiTipoPregunta';
import { get, set } from 'lodash-es';
export class PeiTipoPregunta implements IpeiTipoPregunta {
    constructor(data) {
        set(this, 'data', data);
    }
    get tpoPrgCodigo(): number {
        return get(this, 'data.tpoPrgCodigo');
    }
    set tpoPrgCodigo(value: number) {
        set(this, 'data.tpoPrgCodigo', value);
    }
    get tpoPrgNombre(): string {
        return get(this, 'data.tpoPrgNombre');
    }
    set tpoPrgNombre(value: string) {
        set(this, 'data.tpoPrgNombre', value);
    }
    get tpoPrgEstado(): string {
        return get(this, 'data.tpoPrgEstado');
    }
    set tpoPrgEstado(value: string) {
        set(this, 'data.tpoPrgEstado', value);
    }
}
