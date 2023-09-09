import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from 'app/auth/service';
import { Recurso } from '../models/recurso.model';
import { Rol } from '../models/rol.model';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  /**
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  constructor(private _router: Router, private _authenticationService: AuthenticationService) {}

  // canActivate
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this._authenticationService.currentUserValue;
    if (currentUser) {
  
      //verificar acceso a las paginas por el menu asignado excepto la pagina de inicio
      if(state.url.localeCompare("/pages/inicio")!=0){
           let acceso= this.permitirAcceso(state.url);
           // check if route is restricted by role
          //if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
            if(acceso==false){
            // role not authorised so redirect to not-authorized page
            this._router.navigate(['/pages/miscellaneous/not-authorized']);
            return false;
          }
      }
      

      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this._router.navigate(['/pages/authentication/login-v2'], { queryParams: { returnUrl: state.url } });
    return false;
  }
  permitirAcceso(url:string):Boolean{
    let accesoConcedido:Boolean=false;
    let menu:Rol[]=JSON.parse(localStorage.getItem('menuJson'));
    menu.forEach(rol => {
      let respuesta=this.revisarMenu(rol.menu,url);
      if(respuesta===true){
        accesoConcedido=respuesta;
      }
    });
    return accesoConcedido;
  }
  revisarMenu(recursos:Recurso[], urlBuscar:string):Boolean{
    let recursoEncontrado=false;
       recursos.forEach(recurso => {
         if (recurso.recursosHijos.length>0) {
           let respuesta=this.revisarMenu(recurso.recursosHijos,urlBuscar);
           if(respuesta===true){
            recursoEncontrado= true;
           }
         } else {
           if(recurso.url.localeCompare(urlBuscar)==0){
             recursoEncontrado= true;
           }
         }
       });
    return recursoEncontrado;
  }
}
