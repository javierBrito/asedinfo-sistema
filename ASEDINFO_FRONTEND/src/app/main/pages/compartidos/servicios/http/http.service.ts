import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from 'app/auth/service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly CONTENT_TYPE_JSON = 'application/json; charset=utf-8';
  private readonly HEADER_CONTENT_TYPE_JSON = 'Content-Type';

  

  constructor(private http: HttpClient,private _authenticationService: AuthenticationService) { }

  /**
   * Permite consultar por el método GET añadiendo el token en los headers
   *
   * @param url servicio Rest
   * @param ruta servicio Rest
   * @param param servicio Rest
   * @param headers servicio Rest
   */

   
  public getRequestToken(
    url: string,
    ruta: string,
    headers: HttpHeaders
  ) {
    headers = headers.set('Content-Type', this.CONTENT_TYPE_JSON)
                     .set( 'Authorization', this._authenticationService.currentUserValue.token);

    return this.http.get<any>(
      url + ruta,
      {
        headers
      }
    );
  }

  /**
   * Permite consultar por el método POST añadiendo el token en los headers
   *
   * @param url contexto aplicacion
   * @param ruta del servicio
   * @param param datos a guardar
   * @param headers peticion
   */
  public postRequestToken(
    url: string,
    ruta: string,
    param: any,
    headers: HttpHeaders
  ) {
    headers = headers.set(this.HEADER_CONTENT_TYPE_JSON, this.CONTENT_TYPE_JSON);
    return this.http.post<any>(url + ruta, param, { headers });
  }

  /**
   * Permite realizar acciones por el método DELETE añadiendo el token en los headers
   *
   * @param url servicio Rest
   * @param ruta servicio Rest
   * @param param servicio Rest
   * @param headers servicio Rest
   */
  public deleteRequestToken(
    url: string,
    ruta: string,
    headers: HttpHeaders
  ) {
    headers = headers.set('Content-Type', this.CONTENT_TYPE_JSON);

    return this.http.delete<any>(
      url + ruta,
      {
        headers
      }
    );
  }

}
