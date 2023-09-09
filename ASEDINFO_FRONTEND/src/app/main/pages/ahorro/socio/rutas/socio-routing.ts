import { Routes } from '@angular/router';
import { SocioPrincipalComponent } from '../componentes/socio-principal/socio-principal.component';

export const RUTA_SOCIO: Routes = [
  {
    path: 'ahorro/socio',
    component: SocioPrincipalComponent,
    //canActivate: [AuthGuard],
  }
];