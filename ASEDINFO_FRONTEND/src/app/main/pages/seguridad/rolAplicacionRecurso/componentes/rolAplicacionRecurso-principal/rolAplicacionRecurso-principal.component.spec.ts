import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolAplicacionRecursoPrincipalComponent } from './rolAplicacionRecurso-principal.component';

describe('RolAplicacionRecursoPrincipalComponent', () => {
  let component: RolAplicacionRecursoPrincipalComponent;
  let fixture: ComponentFixture<RolAplicacionRecursoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolAplicacionRecursoPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolAplicacionRecursoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
