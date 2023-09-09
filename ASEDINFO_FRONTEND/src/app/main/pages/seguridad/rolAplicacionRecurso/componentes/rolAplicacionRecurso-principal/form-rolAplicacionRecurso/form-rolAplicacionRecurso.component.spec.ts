import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRolAplicacionRecursoComponent } from './form-rolAplicacionRecurso.component';

describe('FormRolAplicacionRecursoComponent', () => {
  let component: FormRolAplicacionRecursoComponent;
  let fixture: ComponentFixture<FormRolAplicacionRecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRolAplicacionRecursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRolAplicacionRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
