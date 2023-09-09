import { Routes } from '@angular/router';
import { ClientePrincipalComponent } from '../componentes/cliente-principal/cliente-principal.component';

export const RUTA_CLIENTE: Routes = [
  {
    path: 'venta/cliente',
    component: ClientePrincipalComponent,
    //canActivate: [AuthGuard],
  }
];