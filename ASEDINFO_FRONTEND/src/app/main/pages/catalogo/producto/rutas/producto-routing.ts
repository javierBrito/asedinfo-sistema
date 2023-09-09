import { Routes } from '@angular/router';
import { ProductoPrincipalComponent } from '../componentes/producto-principal/producto-principal.component';

export const RUTA_PRODUCTO: Routes = [
  {
    path: 'catalogo/producto',
    component: ProductoPrincipalComponent,
    //canActivate: [AuthGuard],
  }
];