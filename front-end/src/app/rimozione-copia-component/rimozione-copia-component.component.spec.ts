import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimozioneCopiaComponentComponent } from './rimozione-copia-component.component';

describe('RimozioneCopiaComponentComponent', () => {
  let component: RimozioneCopiaComponentComponent;
  let fixture: ComponentFixture<RimozioneCopiaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RimozioneCopiaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RimozioneCopiaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
