import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoPrincipalComponent } from './recurso-principal.component';

describe('RecursoPrincipalComponent', () => {
  let component: RecursoPrincipalComponent;
  let fixture: ComponentFixture<RecursoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursoPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
