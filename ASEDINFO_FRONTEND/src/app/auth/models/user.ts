import { Sede } from "./sede";

export class User {
  codigoUsuario: number;
  identificacion: string;
  cedula: string;
  nombre: string;
  accesoConcedido: Boolean;
  observacion: string;
  sede: Sede;
  token?: string;
}
