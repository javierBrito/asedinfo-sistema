import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioAplicacion } from 'app/main/pages/compartidos/modelos/UsuarioAplicacion';
import { UsuarioRolAplicacion } from 'app/main/pages/compartidos/modelos/UsuarioRolAplicacion';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRolAplicacionService {

  constructor(private http: HttpClient) { }
  /*SERVICIOS EXTERNOS*/
  eliminarUsuarioRolAplicacionPorId(codigo: number): Observable<any> {
    return this.http.delete<any>(`${environment.url_seguridad}/seguridad/eliminarUsuarioRolAplicacionPorId/${codigo}`);
  }
  listarUsuarioRolAplicacionPorRolAplicacion(codRolAplicacion: number) {
    return this.http.get<UsuarioRolAplicacion[]>(`${environment.url_seguridad}/seguridad/listarUsuarioRolAplicacionPorRolAplicacion/${codRolAplicacion}`);
  }
  listarUsuarioRolAplicacionPorCodAplicacion(codRolAplicacion: number) {
    return this.http.get<UsuarioRolAplicacion[]>(`${environment.url_seguridad}/seguridad/listarUsuarioRolAplicacionPorCodAplicacion/${codRolAplicacion}`);
  }
  listarUsuarioRolAplicacionPorCodUsuario(codUsuario: number) {
    return this.http.get<UsuarioRolAplicacion[]>(`${environment.url_seguridad}/seguridad/listarUsuarioRolAplicacionPorCodUsuario/${codUsuario}`);
  }
  listarUsuarioRolAplicacionPorCodUsuarioYCodAplicacion(codUsuario: number, codAplicacion: number) {
    return this.http.get<UsuarioRolAplicacion[]>(`${environment.url_seguridad}/seguridad/listarUsuarioRolAplicacionPorCodUsuarioYCodAplicacion/${codUsuario}/${codAplicacion}`);
  }
  listarUsuarioRolAplicacionPorCodUsuarioYCodRolAplicacion(codUsuario: number, codRolAplicacion: number) {
    return this.http.get<UsuarioRolAplicacion[]>(`${environment.url_seguridad}/seguridad/listarUsuarioRolAplicacionPorCodUsuarioYCodRolAplicacion/${codUsuario}/${codRolAplicacion}`);
  }
  listarTodosUsuarioRolAplicacion(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/seguridad/listarTodosUsuarioRolAplicacion`);
  }
  buscarUsuarioRolAplicacionPorCodigo(codigo: number) {
    return this.http.get<UsuarioRolAplicacion>(`${environment.url_seguridad}/seguridad/buscarUsuarioRolAplicacionPorCodigo/${codigo}`);
  }
  guardarUsuarioRolAplicacion(usuarioRolAplicacion) {
    return this.http.post<UsuarioAplicacion>(`${environment.url_seguridad}/seguridad/guardarUsuarioRolAplicacion`, usuarioRolAplicacion);
  }
  guardarUsuarioAplicacion(usuarioAplicacion) {
    return this.http.post<UsuarioAplicacion>(`${environment.url_seguridad}/seguridad/guardarUsuarioAplicacion`, usuarioAplicacion);
  }

  // Servicios de Usuario & Aplicacion
  listarUsuarioAplicacionPorCodUsuario(codUsuario: number) {
    return this.http.get<UsuarioAplicacion[]>(`${environment.url_seguridad}/seguridad/listarUsuarioAplicacionPorCodUsuario/${codUsuario}`);
  }
  listarUsuarioAplicacionPorUsuarioYAplicacion(codUsuario: number, codAplicacion: number) {
    return this.http.get<UsuarioAplicacion[]>(`${environment.url_seguridad}/seguridad/listarUsuarioAplicacionPorUsuarioYAplicacion/${codUsuario}/${codAplicacion}`);
  }

}
