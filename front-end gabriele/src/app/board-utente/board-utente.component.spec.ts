import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUtenteComponent } from './board-utente.component';

describe('BoardUtenteComponent', () => {
  let component: BoardUtenteComponent;
  let fixture: ComponentFixture<BoardUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardUtenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
