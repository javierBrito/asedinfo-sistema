export interface Itransaccion {
    codigo?: number;
    codCliente?: number;
    codPersona?: number;
    codModulo?: number;
    codOperacion?: number;
    descripcion?: string;
    precio?: number;
    numProducto?: number;
    numExistenciaActual?: number;
    numMes?: number;
    fechaInicio?: string;
    fechaFin?: string;
    fechaRegistra?: string;
    estado?: string;

    cliente?: any,
    producto?: any,
    modulo?: any,
    operacion?: any,
    colorFila: string;
    descripcionProducto: string;
    nombreCliente: string;
    celular: string;
}