import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormSedeComponent } from './form-sede.component';

describe('FormSedeComponent', () => {
  let component: FormSedeComponent;
  let fixture: ComponentFixture<FormSedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
