import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioPrincipalComponent } from './socio-principal.component';

describe('SocioPrincipalComponent', () => {
  let component: SocioPrincipalComponent;
  let fixture: ComponentFixture<SocioPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocioPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
