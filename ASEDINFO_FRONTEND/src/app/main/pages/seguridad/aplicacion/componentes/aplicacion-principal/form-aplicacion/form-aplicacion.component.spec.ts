import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAplicacionComponent } from './form-aplicacion.component';

describe('FormAplicacionComponent', () => {
  let component: FormAplicacionComponent;
  let fixture: ComponentFixture<FormAplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAplicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
