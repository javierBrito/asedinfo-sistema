import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from 'app/main/pages/compartidos/modelos/Persona';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }
  /*SERVICIOS EXTERNOS*/
  eliminarPersonaPorId(codigo: number): Observable<any> {
    return this.http.delete<any>(`${environment.url_seguridad}/catalogo/eliminarPersonaPorId/${codigo}`);
  }
  listarPersonaPorSede(codigoSede: number) {
    return this.http.get<Persona[]>(`${environment.url_seguridad}/catalogo/listarPersonaPorSede/${codigoSede}`);
  }
  listarPersonaPorIdentificacion(identificacion: string) {
    return this.http.get<Persona[]>(`${environment.url_seguridad}/catalogo/listarPersonaPorIdentificacion/${identificacion}`);
  }
  listarTodosPersona(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/catalogo/listarTodosPersona`);
  }
  listarPersonaActivo(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/catalogo/listarPersonaActivo`);
  }
  listarPersonaPadre(codigoAplicacion: number) {
    return this.http.get<Persona[]>(`${environment.url_seguridad}/catalogo/listarPersonaPadre/${codigoAplicacion}`);
  }
  buscarPersonaPorCodigo(codigo: number) {
    return this.http.get<Persona>(`${environment.url_seguridad}/catalogo/buscarPersonaPorCodigo/${codigo}`);
  }
  guardarPersona(persona) {
    return this.http.post<Persona>(`${environment.url_seguridad}/catalogo/guardarPersona`, persona);
  }

}
