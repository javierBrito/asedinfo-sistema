import { Routes } from '@angular/router';
import { UsuarioPrincipalComponent } from '../componentes/usuario-principal/usuario-principal.component';

export const RUTA_USUARIO: Routes = [
  {
    path: 'seguridad/usuario',
    component: UsuarioPrincipalComponent,
    //canActivate: [AuthGuard],
  }
];