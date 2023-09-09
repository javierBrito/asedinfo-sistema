import { Routes } from '@angular/router';
import { AplicacionPrincipalComponent } from '../componentes/aplicacion-principal/aplicacion-principal.component';

export const RUTA_APLICACION: Routes = [
  {
    path: 'seguridad/aplicacion',
    component: AplicacionPrincipalComponent,
    //canActivate: [AuthGuard],
  }
];