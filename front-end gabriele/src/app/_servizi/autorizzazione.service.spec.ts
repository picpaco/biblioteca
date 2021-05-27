import { TestBed } from '@angular/core/testing';

import { AutorizzazioneService } from './autorizzazione.service';

describe('AutorizzazioneService', () => {
  let service: AutorizzazioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorizzazioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
