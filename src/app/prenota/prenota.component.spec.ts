/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrenotaComponent } from './prenota.component';

describe('PrenotaComponent', () => {
  let component: PrenotaComponent;
  let fixture: ComponentFixture<PrenotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
