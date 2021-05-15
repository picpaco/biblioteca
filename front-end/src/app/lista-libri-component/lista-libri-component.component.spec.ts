import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLibriComponentComponent } from './lista-libri-component.component';

describe('ListaLibriComponentComponent', () => {
  let component: ListaLibriComponentComponent;
  let fixture: ComponentFixture<ListaLibriComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLibriComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLibriComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
