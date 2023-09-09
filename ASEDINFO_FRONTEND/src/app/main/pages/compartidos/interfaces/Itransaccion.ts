export interface Itransaccion {
    codigo?: number;
    codCliente?: number;
    codPersona?: number;
    descripcion?: string;
    precioVenta?: number;
    numProductoVenta?: number;
    numMes?: number;
    fechaInicio?: string;
    fechaFin?: string;
    fechaRegistra?: string;
    estado?: string;

    cliente?: any,
    producto?: any,
    colorFila: string;
}