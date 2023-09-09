import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'app/main/pages/compartidos/modelos/Cliente';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  /*SERVICIOS EXTERNOS*/
  eliminarClientePorId(codigo: number): Observable<any> {
    return this.http.delete<any>(`${environment.url_seguridad}/venta/eliminarClientePorId/${codigo}`);
  }
  listarClientePorSede(codigoSede: number) {
    return this.http.get<Cliente[]>(`${environment.url_seguridad}/venta/listarClientePorSede/${codigoSede}`);
  }
  listarClientePorIdentificacion(identificacion: string) {
    return this.http.get<Cliente[]>(`${environment.url_seguridad}/venta/listarClientePorIdentificacion/${identificacion}`);
  }
  listarClientePorPersona(codPersona: number) {
    return this.http.get<Cliente[]>(`${environment.url_seguridad}/venta/listarClientePorPersona/${codPersona}`);
  }
  listarTodosCliente(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/venta/listarTodosCliente`);
  }
  listarClienteActivo(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/venta/listarClienteActivo`);
  }
  listarClientePadre(codigoAplicacion: number) {
    return this.http.get<Cliente[]>(`${environment.url_seguridad}/venta/listarClientePadre/${codigoAplicacion}`);
  }
  buscarClientePorCodigo(codigo: number) {
    return this.http.get<Cliente>(`${environment.url_seguridad}/venta/buscarClientePorCodigo/${codigo}`);
  }
  guardarCliente(cliente) {
    return this.http.post<Cliente>(`${environment.url_seguridad}/venta/guardarCliente`, cliente);
  }

}
