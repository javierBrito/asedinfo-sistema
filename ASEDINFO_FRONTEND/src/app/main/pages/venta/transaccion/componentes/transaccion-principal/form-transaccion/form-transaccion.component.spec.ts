import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTransaccionComponent } from './form-transaccion.component';

describe('FormTransaccionComponent', () => {
  let component: FormTransaccionComponent;
  let fixture: ComponentFixture<FormTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
