import { PeiTipoDiagnostico } from '../../../main/pages/diagnostico/modelos/peiTipoDiagnostico';
export interface IpeiTipoSubdiagnostico {
    tpoSubdiagCodigo: number;
    peiTipoDiagnostico: PeiTipoDiagnostico;
    tpoSubdiagEstado: string;
    tpoSubdiagNombre: string;
}