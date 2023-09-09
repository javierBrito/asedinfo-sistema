import { Routes } from '@angular/router';
import { TransaccionPrincipalComponent } from '../componentes/transaccion-principal/transaccion-principal.component';

export const RUTA_TRANSACCION: Routes = [
  {
    path: 'venta/transaccion',
    component: TransaccionPrincipalComponent,
    //canActivate: [AuthGuard],
  }
];