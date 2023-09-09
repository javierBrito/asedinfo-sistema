import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPrincipalComponent } from './usuario-principal.component';

describe('UsuarioPrincipalComponent', () => {
  let component: UsuarioPrincipalComponent;
  let fixture: ComponentFixture<UsuarioPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
