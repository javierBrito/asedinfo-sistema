import { Routes } from '@angular/router';
import { PersonaPrincipalComponent } from '../componentes/persona-principal/persona-principal.component';

export const RUTA_PERSONA: Routes = [
  {
    path: 'catalogo/persona',
    component: PersonaPrincipalComponent,
    //canActivate: [AuthGuard],
  }
];