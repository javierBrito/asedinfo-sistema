import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User } from 'app/auth/models';
import { ToastrService } from 'ngx-toastr';
import { Rol } from '../models/rol.model';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //public
  public currentUser: Observable<User>;

  //private
  private currentUserSubject: BehaviorSubject<User>;

  private codigoUsuario: number;
  public token: string;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(private _http: HttpClient, private _toastrService: ToastrService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // getter: currentUserValue
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /**
   * User login
   *
   * @param usuario
   * @param password
   * @returns user
   */
  login(usuario: string, password: string) {

    const usuarioLogueo = {
      identificacion: usuario,
      clave: password,
    };

    return this._http
      .post<any>(`${environment.url_seguridad}/public/loginAplicacion`, usuarioLogueo)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.codigoUsuario = user.codigoUsuario;
            this.token = user.token;
            // notify
            this.currentUserSubject.next(user);
          }

          return user;
        })
      );
  }
  obtenerMenu() {

    const JsonEnvio = {
      codigoUsuario: this.codigoUsuario,
      prefijoAplicacion: environment.prefijoApp
    };
    /*
    return this._http
      .post<Rol[]>(`${environment.url_seguridad}/private/obtenerRolesMenu`, JsonEnvio)
      .pipe(
        map(menu => {
          localStorage.setItem('menuJson', JSON.stringify(menu));
          return menu;
        })
      );
      */
     // Para obtener todos los aplicativo y sus recursos asignados
     // jbrito-20230821
      return this._http
      .post<Rol[]>(`${environment.url_seguridad}/seguridad/listarAplicacionMenu`, JsonEnvio)
      .pipe(
        map(menu => {
          localStorage.setItem('menuJson', JSON.stringify(menu));
          return menu;
        })
      );
  }

  /**
   * User logout
   *
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('menuJson');
    // notify
    this.currentUserSubject.next(null);
  }
}
