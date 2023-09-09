import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recurso } from 'app/main/pages/compartidos/modelos/Recurso';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  constructor(private http: HttpClient) { }
  /*SERVICIOS EXTERNOS*/
  eliminarRecursoPorId(codigo: number): Observable<any> {
    return this.http.delete<any>(`${environment.url_seguridad}/seguridad/eliminarRecursoPorId/${codigo}`);
  }
  listarRecursoPorAplicacion(codigoAplicacion: number) {
    return this.http.get<Recurso[]>(`${environment.url_seguridad}/seguridad/listarRecursoPorAplicacion/${codigoAplicacion}`);
  }
  listarRecursoPorCodRolAplicacion(codigoRolAplicacion: number) {
    return this.http.get<Recurso[]>(`${environment.url_seguridad}/seguridad/listarRecursoPorCodRolAplicacion/${codigoRolAplicacion}`);
  }
  listarTodosRecurso(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/seguridad/listarTodosRecurso`);
  }
  listarRecursoActivo(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/seguridad/listarRecursoActivo`);
  }
  listarRecursoPadre(codigoAplicacion: number) {
    return this.http.get<Recurso[]>(`${environment.url_seguridad}/seguridad/listarRecursoPadre/${codigoAplicacion}`);
  }
  buscarRecursoPorCodigo(codigo: number) {
    return this.http.get<Recurso>(`${environment.url_seguridad}/seguridad/buscarRecursoPorCodigo/${codigo}`);
  }
  guardarRecurso(recurso) {
    return this.http.post<Recurso>(`${environment.url_seguridad}/seguridad/guardarRecurso`, recurso);
  }

}
