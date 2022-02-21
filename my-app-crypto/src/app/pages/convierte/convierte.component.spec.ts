/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConvierteComponent } from './convierte.component';

describe('ConvierteComponent', () => {
  let component: ConvierteComponent;
  let fixture: ComponentFixture<ConvierteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvierteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvierteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
