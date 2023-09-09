import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RolAplicacion } from 'app/main/pages/compartidos/modelos/RolAplicacion';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolAplicacionService {

  constructor(private http: HttpClient) { }
  /*SERVICIOS EXTERNOS*/
  eliminarRolAplicacionPorId(codigo: number): Observable<any> {
    return this.http.delete<any>(`${environment.url_seguridad}/seguridad/eliminarRolAplicacionPorId/${codigo}`);
  }
  listarRolAplicacionPorCodAplicacion(codigoAplicacion: number) {
    return this.http.get<RolAplicacion[]>(`${environment.url_seguridad}/seguridad/listarRolAplicacionPorCodAplicacion/${codigoAplicacion}`);
  }
  listarTodosRolAplicacion(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/seguridad/listarTodosRolAplicacion`);
  }
  listarRolAplicacionActivo(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/seguridad/listarRolAplicacionActivo`);
  }
  buscarRolAplicacionPorCodigo(codigo: number) {
    return this.http.get<RolAplicacion>(`${environment.url_seguridad}/seguridad/buscarRolAplicacionPorCodigo/${codigo}`);
  }
  guardarRolAplicacion(consejoEjecutivo) {
    return this.http.post<RolAplicacion>(`${environment.url_seguridad}/seguridad/guardarRolAplicacion`, consejoEjecutivo);
  }

}
