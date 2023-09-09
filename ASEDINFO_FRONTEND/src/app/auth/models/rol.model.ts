import { Aplicacion } from "./aplicacion.model";
import { Recurso } from "./recurso.model";

export interface Rol{
    codigo:number;
    aplicacion:Aplicacion;
    nombre:string;
    descripcion:string;
    estado:string;
    estadoActivo?:string;
    asignado?:string;
    enumRolSeguridad?:string;
    asignadoAdministrador?:string;
    menu:Recurso[];
}