import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAmministratoreComponent } from './board-amministratore.component';

describe('BoardAmministratoreComponent', () => {
  let component: BoardAmministratoreComponent;
  let fixture: ComponentFixture<BoardAmministratoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAmministratoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAmministratoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
