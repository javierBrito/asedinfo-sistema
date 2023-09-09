import { Sede } from "../models/sede";
export interface IloginAplicacion {
    codigoUsuario: number;
    identificacion: string;
    cedula: string;
    nombre: string;
    accesoConcedido: boolean;
    observacion: string;
    sede: Sede;
}