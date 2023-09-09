import { Routes } from '@angular/router';
import { SedePrincipalComponent } from '../componentes/sede-principal/sede-principal.component';

export const RUTA_SEDE: Routes = [
  {
    path: 'seguridad/sede',
    component: SedePrincipalComponent,
    //canActivate: [AuthGuard],
  }
];