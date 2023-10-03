import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'app/main/pages/compartidos/modelos/Producto';
import { ReporteDTO } from 'app/main/pages/compartidos/modelos/ReporteDTO.model';
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
    return this.http.delete<any>(`${environment.url_seguridad}/catalogo/eliminarTransaccionPorId/${codigo}`);
  }
  listarTransaccionPorSede(codigoSede: number) {
    return this.http.get<Transaccion[]>(`${environment.url_seguridad}/catalogo/listarTransaccionPorSede/${codigoSede}`);
  }
  listarTransaccionPorDescripcion(descripcion: string) {
    return this.http.get<Transaccion[]>(`${environment.url_seguridad}/catalogo/listarTransaccionPorDescripcion/${descripcion}`);
  }
  listarTransaccionACaducarse(numDias: number) {
    return this.http.get<Transaccion[]>(`${environment.url_seguridad}/catalogo/listarTransaccionACaducarse/${numDias}`);
  }
  listarTransaccionPorRangoFechas(fechaInicio: string, fechaFin: string) {
    return this.http.get<Transaccion[]>(`${environment.url_seguridad}/catalogo/listarTransaccionPorRangoFechas/${fechaInicio}/${fechaFin}`);
  }
  listarTodosTransaccion(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/catalogo/listarTodosTransaccion`);
  }
  listarTransaccionActivo(nemonicoModulo: string): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/catalogo/listarTransaccionActivo/${nemonicoModulo}`);
  }
  listarTransaccionPadre(codigoAplicacion: number) {
    return this.http.get<Transaccion[]>(`${environment.url_seguridad}/catalogo/listarTransaccionPadre/${codigoAplicacion}`);
  }
  buscarTransaccionPorCodigo(codigo: number) {
    return this.http.get<Transaccion>(`${environment.url_seguridad}/catalogo/buscarTransaccionPorCodigo/${codigo}`);
  }
  guardarTransaccion(transaccion) {
    return this.http.post<Transaccion>(`${environment.url_seguridad}/catalogo/guardarTransaccion`, transaccion);
  }
  // Enviar Correo con Archivo PDF
  enviarCorreo(reporteDTO: ReporteDTO): Observable<any> {
    return this.http.post(`${environment.url_seguridad}/private/enviarCorreo`, reporteDTO);
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
