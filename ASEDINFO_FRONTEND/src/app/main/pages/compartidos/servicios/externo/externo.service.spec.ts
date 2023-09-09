import { TestBed } from '@angular/core/testing';

import { ExternoService } from './externo.service';

describe('ConsejoEjecutivoService', () => {
  let service: ExternoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
