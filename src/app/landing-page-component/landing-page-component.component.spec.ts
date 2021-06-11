/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LandingPageComponentComponent } from './landing-page-component.component';

describe('LandingPageComponentComponent', () => {
  let component: LandingPageComponentComponent;
  let fixture: ComponentFixture<LandingPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
