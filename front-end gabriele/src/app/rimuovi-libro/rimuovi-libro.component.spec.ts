import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimuoviLibroComponent } from './rimuovi-libro.component';

describe('RimuoviLibroComponent', () => {
  let component: RimuoviLibroComponent;
  let fixture: ComponentFixture<RimuoviLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RimuoviLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RimuoviLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
