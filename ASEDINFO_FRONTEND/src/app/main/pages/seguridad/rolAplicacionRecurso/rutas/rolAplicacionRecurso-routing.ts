import { Routes } from '@angular/router';
import { RolAplicacionRecursoPrincipalComponent } from '../componentes/rolAplicacionRecurso-principal/rolAplicacionRecurso-principal.component';

export const RUTA_ROL_APLICACION_RECURSO: Routes = [
  {
    path: 'seguridad/rolAplicacionRecurso',
    component: RolAplicacionRecursoPrincipalComponent,
    //canActivate: [AuthGuard],
  }
];