import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RolAplicacionRecurso } from 'app/main/pages/compartidos/modelos/RolAplicacionRecurso';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolAplicacionRecursoService {

  constructor(private http: HttpClient) { }
  /*SERVICIOS EXTERNOS*/
  eliminarRolAplicacionRecursoPorId(codigo: number): Observable<any> {
    return this.http.delete<any>(`${environment.url_seguridad}/seguridad/eliminarRolAplicacionRecursoPorId/${codigo}`);
  }
  listarRolAplicacionRecursoPorRolAplicacion(codRolAplicacion: number) {
    return this.http.get<RolAplicacionRecurso[]>(`${environment.url_seguridad}/seguridad/listarRolAplicacionRecursoPorRolAplicacion/${codRolAplicacion}`);
  }
  listarRolAplicacionRecursoPorAplicacion(codigoAplicacion: number) {
    return this.http.get<RolAplicacionRecurso[]>(`${environment.url_seguridad}/seguridad/listarRolAplicacionRecursoPorAplicacion/${codigoAplicacion}`);
  }
  listarTodosRolAplicacionRecurso(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/seguridad/listarTodosRolAplicacionRecurso`);
  }
  buscarRolAplicacionRecursoPorCodigo(codigo: number) {
    return this.http.get<RolAplicacionRecurso>(`${environment.url_seguridad}/seguridad/buscarRolAplicacionRecursoPorCodigo/${codigo}`);
  }
  guardarRolAplicacionRecurso(consejoEjecutivo) {
    return this.http.post<RolAplicacionRecurso>(`${environment.url_seguridad}/seguridad/guardarRolAplicacionRecurso`, consejoEjecutivo);
  }

}
