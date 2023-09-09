import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { UsuarioCedula } from '../../modelos/usuarioCedula';

@Injectable({
  providedIn: 'root'
})
export class ExternoService {
  constructor(private http: HttpClient) { }
  /*SERVICIOS EXTERNOS*/
  // Datos Usuario logueado en el sistema
  //buscarPorCedula(objeto: any): Observable<UsuarioCedula> {
  //  return this.http.post<UsuarioCedula>(`${environment.url_servicioExterno}/public/buscarPorCedula`, objeto);
  //}
  // Obtener Grado
  buscarCatalogoGradosPorCodigo(graCodigo: number) {
    return this.http.get<any>(`${environment.url_catalogo}/private/buscarCatalogoGradosPorCodigo/${graCodigo}`);
  }
  // Obtener Nivel
  buscarNivelPorCodigo(nivCodigo: number) {
    return this.http.get<any>(`${environment.url_catalogo}/private/buscarNivelPorCodigo/${nivCodigo}`);
  }
  // Obtener Tipo Nivel
  buscarCatalogoTipoNivelPorCodigo(tipnivCodigo: number) {
    return this.http.get<any>(`${environment.url_catalogo}/private/buscarCatalogoTipoNivelPorCodigo/${tipnivCodigo}`);
  }
  // Obtener Tipo Educacion
  buscarTipoEducacionPorCodigo(tipeduCodigo: number) {
    return this.http.get<any>(`${environment.url_catalogo}/private/buscarTipoEducacionPorCodigo/${tipeduCodigo}`);
  }
  // Obtener Año Lectivo
  buscarAnioLectivoPorCodigo(anilecCodigo: number) {
    return this.http.get<any>(`${environment.url_catalogo}/private/buscarAnioLectivoPorCodigo/${anilecCodigo}`);
  }
  // Obtener RegAniLec por codigo reanleCodigo
  buscarRegimenAnioLectivoPorCodigo(reanleCodigo: number) {
    return this.http.get<any>(`${environment.url_catalogo}/private/buscarRegimenAnioLectivoPorCodigo/${reanleCodigo}`);
  }
  // Listar Regimen Anio Lectivo
  listarRegimenAnioLectivoActivo(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.url_catalogo}/private/listarRegimenAnioLectivo`);
  }
  // Busar regimen por código
  buscarRegimenPorCodigo(regCodigo: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.url_catalogo}/private/buscarRegimenPorCodigo/${regCodigo}`);
  }
  // Busar jornada por código
  buscarJornadaPorCodigo(jorCodigo: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.url_catalogo}/private/buscarJornadaPorCodigo/${jorCodigo}`);
  }
  // Busar modalidad por código
  buscarModalidadPorCodigo(modCodigo: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.url_catalogo}/private/buscaroModalidadPorCodigo/${modCodigo}`);
  }
  // Busar especialidad por código
  buscarEspecialidadPorCodigo(espCodigo: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.url_catalogo}/private/buscarCatalogoEspecialidadPorCodigo/${espCodigo}`);
  }
}
