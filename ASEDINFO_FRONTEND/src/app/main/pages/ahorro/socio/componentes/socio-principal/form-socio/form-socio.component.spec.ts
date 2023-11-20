import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormSocioComponent } from './form-socio.component';

describe('FormSocioComponent', () => {
  let component: FormSocioComponent;
  let fixture: ComponentFixture<FormSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
