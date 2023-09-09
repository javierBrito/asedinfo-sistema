import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUsuarioRolAplicacionComponent } from './form-usuarioRolAplicacion.component';

describe('FormUsuarioRolAplicacionComponent', () => {
  let component: FormUsuarioRolAplicacionComponent;
  let fixture: ComponentFixture<FormUsuarioRolAplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUsuarioRolAplicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUsuarioRolAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
