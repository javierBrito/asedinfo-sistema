import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePrincipalComponent } from './cliente-principal.component';

describe('ClientePrincipalComponent', () => {
  let component: ClientePrincipalComponent;
  let fixture: ComponentFixture<ClientePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientePrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
