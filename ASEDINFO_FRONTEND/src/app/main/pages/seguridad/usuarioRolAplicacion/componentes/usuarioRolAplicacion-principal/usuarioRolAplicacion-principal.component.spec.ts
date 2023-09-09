import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRolAplicacionPrincipalComponent } from './usuarioRolAplicacion-principal.component';

describe('UsuarioRolAplicacionPrincipalComponent', () => {
  let component: UsuarioRolAplicacionPrincipalComponent;
  let fixture: ComponentFixture<UsuarioRolAplicacionPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioRolAplicacionPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRolAplicacionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
