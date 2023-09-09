import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socio } from 'app/main/pages/compartidos/modelos/Socio';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  constructor(private http: HttpClient) { }
  /*SERVICIOS EXTERNOS*/
  eliminarSocioPorId(codigo: number): Observable<any> {
    return this.http.delete<any>(`${environment.url_seguridad}/ahorro/eliminarSocioPorId/${codigo}`);
  }
  listarSocioPorSede(codigoSede: number) {
    return this.http.get<Socio[]>(`${environment.url_seguridad}/ahorro/listarSocioPorSede/${codigoSede}`);
  }
  listarSocioPorIdentificacion(identificacion: string) {
    return this.http.get<Socio[]>(`${environment.url_seguridad}/ahorro/listarSocioPorIdentificacion/${identificacion}`);
  }
  listarSocioPorPersona(codPersona: number) {
    return this.http.get<Socio[]>(`${environment.url_seguridad}/ahorro/listarSocioPorPersona/${codPersona}`);
  }
  listarTodosSocio(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/ahorro/listarTodosSocio`);
  }
  listarSocioActivo(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/ahorro/listarSocioActivo`);
  }
  listarSocioPadre(codigoAplicacion: number) {
    return this.http.get<Socio[]>(`${environment.url_seguridad}/ahorro/listarSocioPadre/${codigoAplicacion}`);
  }
  buscarSocioPorCodigo(codigo: number) {
    return this.http.get<Socio>(`${environment.url_seguridad}/ahorro/buscarSocioPorCodigo/${codigo}`);
  }
  guardarSocio(socio) {
    return this.http.post<Socio>(`${environment.url_seguridad}/ahorro/guardarSocio`, socio);
  }

}
