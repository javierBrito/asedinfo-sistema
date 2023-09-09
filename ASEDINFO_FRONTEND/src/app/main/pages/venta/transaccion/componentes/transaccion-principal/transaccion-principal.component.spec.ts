import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionPrincipalComponent } from './transaccion-principal.component';

describe('TransaccionPrincipalComponent', () => {
  let component: TransaccionPrincipalComponent;
  let fixture: ComponentFixture<TransaccionPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaccionPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
