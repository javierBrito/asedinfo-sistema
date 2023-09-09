import { Routes } from '@angular/router';
import { InicioSesionPrincipalComponent } from '../componentes/inicioSesion-principal/inicioSesion-principal.component';

export const RUTA_INICIO_SESION: Routes = [
  {
    path: 'seguridad/inicioSesion',
    component: InicioSesionPrincipalComponent,
    //canActivate: [AuthGuard],
  }
];