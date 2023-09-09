import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InicioSesion } from 'app/main/pages/compartidos/modelos/InicioSesion';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {
  constructor(private http: HttpClient) { }
  listarTodosInicioSesion(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/seguridad/listarTodosInicioSesion`);
  }
  buscarInicioSesionPorCodigo(codigo: number) {
    return this.http.get<any>(`${environment.url_seguridad}/seguridad/buscarInicioSesionPorCodigo/${codigo}`);

  }
  guardarInicioSesion(inicioSesion) {
    return this.http.post<InicioSesion>(`${environment.url_seguridad}/seguridad/guardarInicioSesion`, inicioSesion);
  }
}
