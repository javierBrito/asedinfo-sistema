import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aplicacion } from 'app/main/pages/compartidos/modelos/Aplicacion';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AplicacionService {
  constructor(private http: HttpClient) { }
  eliminarAplicacionPorId(codigo: number): Observable<any> {
    return this.http.delete<any>(`${environment.url_seguridad}/seguridad/eliminarAplicacionPorId/${codigo}`);
  }
  listarAplicacionActivo(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/seguridad/listarAplicacionActivo`);
  }
  buscarAplicacionPorCodigo(codigo: number) {
    return this.http.get<any>(`${environment.url_seguridad}/seguridad/buscarAplicacionPorCodigo/${codigo}`);

  }
  guardarAplicacion(aplicacion) {
    return this.http.post<Aplicacion>(`${environment.url_seguridad}/seguridad/guardarAplicacion`, aplicacion);
  }
}
