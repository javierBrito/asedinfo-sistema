import { TestBed } from '@angular/core/testing';
import { InicioSesionService } from './inicioSesion.service';


describe('InicioSesionService', () => {
  let service: InicioSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioSesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
