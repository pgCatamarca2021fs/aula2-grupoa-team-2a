/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FondeoCajaComponent } from './fondeoCaja.component';

describe('FondeoCajaComponent', () => {
  let component: FondeoCajaComponent;
  let fixture: ComponentFixture<FondeoCajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondeoCajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondeoCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
