import { set, get } from 'lodash-es';
import { IreporteDTO } from '../interfaces/IreporteDTO';

export class ReporteDTO implements IreporteDTO {
    constructor(data) {
        set(this, 'data', data);
    }
    get cedula(): string {
        return get(this, 'data.cedula');
    }
    set cedula(value: string) {
        set(this, 'data.cedula', value);
    }
    get apellidoNombre(): string {
        return get(this, 'data.apellidoNombre');
    }
    set apellidoNombre(value: string) {
        set(this, 'data.apellidoNombre', value);
    }
    get fechaNacimiento(): string {
        return get(this, 'data.fechaNacimiento');
    }
    set fechaNacimiento(value: string) {
        set(this, 'data.fechaNacimiento', value);
    }
    get edad(): string {
        return get(this, 'data.edad');
    }
    set edad(value: string) {
        set(this, 'data.edad', value);
    }
}
