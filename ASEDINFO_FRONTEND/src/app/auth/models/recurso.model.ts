export interface Recurso{
    codigo: number;
    nombre: string;
    descripcion:string;
    url:string;
    nivel:number;
    codigoRecursoPadre:number;
    recursosHijos?: Recurso[];
}