export interface Iproducto {
    codigo?: number;
    codModulo?: number;
    codCategoria?: number;
    descripcion?: string;
    precioCosto?: number;
    precioMayoreo?: number;
    numExistenciaActual?: number;
    numExistenciaMinima?: number;
    fechaRegistra?: string;
    estado?: string;

    modulo: any;
    categoria: any;
}