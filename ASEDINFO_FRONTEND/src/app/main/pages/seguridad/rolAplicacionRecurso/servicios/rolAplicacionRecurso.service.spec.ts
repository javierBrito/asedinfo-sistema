import { TestBed } from '@angular/core/testing';
import { RolAplicacionRecursoService } from './rolAplicacionRecurso.service';

describe('RolAplicacionRecursoService', () => {
  let service: RolAplicacionRecursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolAplicacionRecursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
