import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionPrincipalComponent } from './aplicacion-principal.component';

describe('AplicacionPrincipalComponent', () => {
  let component: AplicacionPrincipalComponent;
  let fixture: ComponentFixture<AplicacionPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicacionPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
