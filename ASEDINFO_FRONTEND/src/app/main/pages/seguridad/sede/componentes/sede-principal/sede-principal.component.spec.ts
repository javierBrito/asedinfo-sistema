import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedePrincipalComponent } from './sede-principal.component';

describe('SedePrincipalComponent', () => {
  let component: SedePrincipalComponent;
  let fixture: ComponentFixture<SedePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedePrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
