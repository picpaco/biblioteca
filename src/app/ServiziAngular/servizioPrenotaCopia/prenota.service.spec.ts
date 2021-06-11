/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrenotaService } from './prenota.service';

describe('Service: Prenota', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrenotaService]
    });
  });

  it('should ...', inject([PrenotaService], (service: PrenotaService) => {
    expect(service).toBeTruthy();
  }));
});
