import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'app/main/pages/compartidos/modelos/Usuario';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  /*SERVICIOS EXTERNOS*/
  eliminarUsuarioPorId(codigo: number): Observable<any> {
    return this.http.delete<any>(`${environment.url_seguridad}/seguridad/eliminarUsuarioPorId/${codigo}`);
  }
  listarUsuarioPorSede(codigoSede: number) {
    return this.http.get<Usuario[]>(`${environment.url_seguridad}/seguridad/listarUsuarioPorSede/${codigoSede}`);
  }
  listarUsuarioPorIdentificacion(identificacion: string) {
    return this.http.get<Usuario[]>(`${environment.url_seguridad}/seguridad/listarUsuarioPorIdentificacion/${identificacion}`);
  }
  listarUsuarioPorPersona(codPersona: number) {
    return this.http.get<Usuario[]>(`${environment.url_seguridad}/seguridad/listarUsuarioPorPersona/${codPersona}`);
  }
  listarTodosUsuario(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/seguridad/listarTodosUsuario`);
  }
  listarUsuarioActivo(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/seguridad/listarUsuarioActivo`);
  }
  listarUsuarioPadre(codigoAplicacion: number) {
    return this.http.get<Usuario[]>(`${environment.url_seguridad}/seguridad/listarUsuarioPadre/${codigoAplicacion}`);
  }
  buscarUsuarioPorCodigo(codigo: number) {
    return this.http.get<Usuario>(`${environment.url_seguridad}/seguridad/buscarUsuarioPorCodigo/${codigo}`);
  }
  guardarUsuario(usuario) {
    console.log("usuario = ", usuario);
    return this.http.post<Usuario>(`${environment.url_seguridad}/seguridad/guardarUsuario`, usuario);
  }

}
