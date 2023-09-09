import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionPrincipalComponent } from './inicioSesion-principal.component';

describe('InicioSesionPrincipalComponent', () => {
  let component: InicioSesionPrincipalComponent;
  let fixture: ComponentFixture<InicioSesionPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSesionPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSesionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
