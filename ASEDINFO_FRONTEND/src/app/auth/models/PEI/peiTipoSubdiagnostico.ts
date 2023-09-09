import { PeiTipoDiagnostico } from '../../../main/pages/diagnostico/modelos/peiTipoDiagnostico';
import { IpeiTipoSubdiagnostico } from './../../interface/PEI/ipeiTipoSubdiagnostico';
import { get, set } from 'lodash-es';
export class PeiTipoSubdiagnostico implements IpeiTipoSubdiagnostico {
    constructor(data) {
        set(this, 'data', data);
    }
    get tpoSubdiagCodigo(): number {
        return get(this, 'data.tpoSubdiagCodigo');
    }
    set tpoSubdiagCodigo(value: number) {
        set(this, 'data.tpoSubdiagCodigo', value);
    }
    get peiTipoDiagnostico(): PeiTipoDiagnostico {
        return get(this, 'data.peiTipoDiagnostico');
    }
    set peiTipoDiagnostico(value: PeiTipoDiagnostico) {
        set(this, 'data.peiTipoDiagnostico', value);
    }
    get tpoSubdiagEstado(): string {
        return get(this, 'data.tpoSubdiagEstado');
    }
    set tpoSubdiagEstado(value: string) {
        set(this, 'data.tpoSubdiagEstado', value);
    }
    get tpoSubdiagNombre(): string {
        return get(this, 'data.tpoSubdiagNombre');
    }
    set tpoSubdiagNombre(value: string) {
        set(this, 'data.tpoSubdiagNombre', value);
    }
}
