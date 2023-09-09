import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaccion } from 'app/main/pages/compartidos/modelos/Transaccion';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private http: HttpClient) { }
  /*SERVICIOS EXTERNOS*/
  eliminarTransaccionPorId(codigo: number): Observable<any> {
    return this.http.delete<any>(`${environment.url_seguridad}/venta/eliminarTransaccionPorId/${codigo}`);
  }
  listarTransaccionPorSede(codigoSede: number) {
    return this.http.get<Transaccion[]>(`${environment.url_seguridad}/venta/listarTransaccionPorSede/${codigoSede}`);
  }
  listarTransaccionPorDescripcion(descripcion: string) {
    return this.http.get<Transaccion[]>(`${environment.url_seguridad}/venta/listarTransaccionPorDescripcion/${descripcion}`);
  }
  listarTodosTransaccion(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/venta/listarTodosTransaccion`);
  }
  listarTransaccionActivo(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/venta/listarTransaccionActivo`);
  }
  listarTransaccionPadre(codigoAplicacion: number) {
    return this.http.get<Transaccion[]>(`${environment.url_seguridad}/venta/listarTransaccionPadre/${codigoAplicacion}`);
  }
  buscarTransaccionPorCodigo(codigo: number) {
    return this.http.get<Transaccion>(`${environment.url_seguridad}/venta/buscarTransaccionPorCodigo/${codigo}`);
  }
  guardarTransaccion(transaccion) {
    return this.http.post<Transaccion>(`${environment.url_seguridad}/venta/guardarTransaccion`, transaccion);
  }

}
