export interface Irecurso {
    codigo?: number;
    nombre?: string;
    descripcion?: string;
    url?: string;
    cadigoPadre?: number;
    nivel?: number;
    estado?: string;
    codigoAplicacion?: number;
    aplicacion: any;
    recursoPadre: any;
}