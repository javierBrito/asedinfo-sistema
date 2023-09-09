import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRolAplicacionComponent } from './form-rolAplicacion.component';

describe('FormRolAplicacionComponent', () => {
  let component: FormRolAplicacionComponent;
  let fixture: ComponentFixture<FormRolAplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRolAplicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRolAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
