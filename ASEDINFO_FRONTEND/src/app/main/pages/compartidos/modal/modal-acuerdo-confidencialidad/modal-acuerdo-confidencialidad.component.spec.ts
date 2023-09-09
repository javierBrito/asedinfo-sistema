/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalAcuerdoConfidencialidadComponent } from './modal-acuerdo-confidencialidad.component';

describe('ModalAcuerdoConfidencialidadComponent', () => {
  let component: ModalAcuerdoConfidencialidadComponent;
  let fixture: ComponentFixture<ModalAcuerdoConfidencialidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAcuerdoConfidencialidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAcuerdoConfidencialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
