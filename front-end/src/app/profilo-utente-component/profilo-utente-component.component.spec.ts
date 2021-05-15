import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloUtenteComponentComponent } from './profilo-utente-component.component';

describe('ProfiloUtenteComponentComponent', () => {
  let component: ProfiloUtenteComponentComponent;
  let fixture: ComponentFixture<ProfiloUtenteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiloUtenteComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiloUtenteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
