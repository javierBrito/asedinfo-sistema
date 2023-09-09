import { Routes } from '@angular/router';
import { UsuarioRolAplicacionPrincipalComponent } from '../componentes/usuarioRolAplicacion-principal/usuarioRolAplicacion-principal.component';

export const RUTA_USUARIO_ROL_APLICACION: Routes = [
  {
    path: 'seguridad/usuarioRolAplicacion',
    component: UsuarioRolAplicacionPrincipalComponent,
    //canActivate: [AuthGuard],
  }
];