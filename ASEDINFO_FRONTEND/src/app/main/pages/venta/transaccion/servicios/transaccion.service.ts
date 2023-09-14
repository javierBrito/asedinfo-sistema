import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'app/main/pages/compartidos/modelos/Producto';
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

  // Servicios de Modulo
  buscarModuloPorCodigo(codigo: number) {
    return this.http.get<Producto>(`${environment.url_seguridad}/catalogo/buscarModuloPorCodigo/${codigo}`);
  }
  listarModuloActivo(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/catalogo/listarModuloActivo`);
  }
  buscarModuloPorNemonico(nemonico: string) {
    return this.http.get<Producto>(`${environment.url_seguridad}/catalogo/buscarModuloPorNemonico/${nemonico}`);
  }

  // Servicios de Operacion
  buscarOperacionPorCodigo(codigo: number) {
    return this.http.get<Producto>(`${environment.url_seguridad}/catalogo/buscarOperacionPorCodigo/${codigo}`);
  }
  listarOperacionActivo(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/catalogo/listarOperacionActivo`);
  }
  buscarOperacionPorNemonico(nemonico: string) {
    return this.http.get<Producto>(`${environment.url_seguridad}/catalogo/buscarOperacionPorNemonico/${nemonico}`);
  }

}
