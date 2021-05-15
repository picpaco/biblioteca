import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUtentiComponentComponent } from './lista-utenti-component.component';

describe('ListaUtentiComponentComponent', () => {
  let component: ListaUtentiComponentComponent;
  let fixture: ComponentFixture<ListaUtentiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUtentiComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUtentiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
