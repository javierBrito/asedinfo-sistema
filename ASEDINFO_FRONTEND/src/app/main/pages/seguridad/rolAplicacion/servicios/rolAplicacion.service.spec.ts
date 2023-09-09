import { TestBed } from '@angular/core/testing';
import { RolAplicacionService } from './rolAplicacion.service';

describe('RolAplicacionService', () => {
  let service: RolAplicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolAplicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
