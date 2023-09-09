import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'app/main/pages/compartidos/modelos/Producto';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }
  /*SERVICIOS EXTERNOS*/
  eliminarProductoPorId(codigo: number): Observable<any> {
    return this.http.delete<any>(`${environment.url_seguridad}/catalogo/eliminarProductoPorId/${codigo}`);
  }
  listarProductoPorSede(codigoSede: number) {
    return this.http.get<Producto[]>(`${environment.url_seguridad}/catalogo/listarProductoPorSede/${codigoSede}`);
  }
  listarProductoPorDescripcion(descripcion: string) {
    return this.http.get<Producto[]>(`${environment.url_seguridad}/catalogo/listarProductoPorDescripcion/${descripcion}`);
  }
  listarTodosProducto(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/catalogo/listarTodosProducto`);
  }
  listarProductoActivo(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/catalogo/listarProductoActivo`);
  }
  listarProductoPadre(codigoAplicacion: number) {
    return this.http.get<Producto[]>(`${environment.url_seguridad}/catalogo/listarProductoPadre/${codigoAplicacion}`);
  }
  buscarProductoPorCodigo(codigo: number) {
    return this.http.get<Producto>(`${environment.url_seguridad}/catalogo/buscarProductoPorCodigo/${codigo}`);
  }
  guardarProducto(producto) {
    return this.http.post<Producto>(`${environment.url_seguridad}/catalogo/guardarProducto`, producto);
  }

}
