import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sede } from 'app/main/pages/compartidos/modelos/Sede';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SedeService {
  constructor(private http: HttpClient) { }
  eliminarSedePorId(codigo: number): Observable<any> {
    return this.http.delete<any>(`${environment.url_seguridad}/seguridad/eliminarSedePorId/${codigo}`);
  }
  listarSedeActivo(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/seguridad/listarSedeActivo`);
  }
  listarSedeSuperior(): Observable<any> | undefined {
    return this.http.get<any[]>(`${environment.url_seguridad}/seguridad/listarSedeSuperior`);
    
  }
  buscarSedePorCodigo(codigo: number) {
    return this.http.get<any>(`${environment.url_seguridad}/seguridad/buscarSedePorCodigo/${codigo}`);

  }
  guardarSede(sede) {
    return this.http.post<Sede>(`${environment.url_seguridad}/seguridad/guardarSede`, sede);
  }
}
