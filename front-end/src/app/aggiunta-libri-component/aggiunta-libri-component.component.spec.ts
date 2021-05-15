import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiuntaLibriComponentComponent } from './aggiunta-libri-component.component';

describe('AggiuntaLibriComponentComponent', () => {
  let component: AggiuntaLibriComponentComponent;
  let fixture: ComponentFixture<AggiuntaLibriComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiuntaLibriComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiuntaLibriComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
