import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrazioneComponentComponent } from './registrazione-component.component';

describe('RegistrazioneComponentComponent', () => {
  let component: RegistrazioneComponentComponent;
  let fixture: ComponentFixture<RegistrazioneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrazioneComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrazioneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
