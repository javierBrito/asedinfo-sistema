import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolAplicacionPrincipalComponent } from './rolAplicacion-principal.component';

describe('RolAplicacionPrincipalComponent', () => {
  let component: RolAplicacionPrincipalComponent;
  let fixture: ComponentFixture<RolAplicacionPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolAplicacionPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolAplicacionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
