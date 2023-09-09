import { pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Sede } from 'app/auth/models/sede';
import { LoginAplicacion } from 'app/auth/models/loginAplicacion';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _data: any;
  /*Variables*/
  private currentUser: LoginAplicacion;
  private sede: Sede;
  private amieRegex: string;

  constructor(
    private http: HttpClient,

  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser) {
      this.sede = this.currentUser.sede;
      this.amieRegex = this.patternAmie(this.sede.nombre);
    }
  }

  patternAmie(amie: string) {
    const valorEncontrar = amie
    const regExp = new RegExp('([0-9])\\w+')
    const amieFiltrado = valorEncontrar.match(regExp)
    return amieFiltrado['0']
  }

  public getData() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/config/app-config.json').subscribe(data => {
        this._data = data;
        resolve(true);
      }, error => {
        console.error("Error al obtener la configuración: " + error);
        reject(true);
      })
    })
  }

  public amie() {
    return this.amieRegex
  }
}
