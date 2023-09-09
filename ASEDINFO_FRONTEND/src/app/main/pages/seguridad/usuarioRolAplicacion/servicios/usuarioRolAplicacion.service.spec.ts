import { TestBed } from '@angular/core/testing';
import { UsuarioRolAplicacionService } from './usuarioRolAplicacion.service';

describe('UsuarioRolAplicacionService', () => {
  let service: UsuarioRolAplicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioRolAplicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
