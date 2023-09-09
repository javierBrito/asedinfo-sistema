import { Routes } from '@angular/router';
import { RolAplicacionPrincipalComponent } from '../componentes/rolAplicacion-principal/rolAplicacion-principal.component';

export const RUTA_ROL_APLICACION: Routes = [
  {
    path: 'seguridad/rolAplicacion',
    component: RolAplicacionPrincipalComponent,
    //canActivate: [AuthGuard],
  }
];