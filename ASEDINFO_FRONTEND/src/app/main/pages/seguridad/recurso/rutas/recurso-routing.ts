import { Routes } from '@angular/router';
import { RecursoPrincipalComponent } from '../componentes/recurso-principal/recurso-principal.component';

export const RUTA_RECURSO: Routes = [
  {
    path: 'seguridad/recurso',
    component: RecursoPrincipalComponent,
    //canActivate: [AuthGuard],
  }
];