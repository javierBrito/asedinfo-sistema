import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPrincipalComponent } from './producto-principal.component';

describe('ProductoPrincipalComponent', () => {
  let component: ProductoPrincipalComponent;
  let fixture: ComponentFixture<ProductoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
