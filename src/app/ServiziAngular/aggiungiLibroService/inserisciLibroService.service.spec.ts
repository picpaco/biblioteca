/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InserisciLibroServiceService } from './inserisciLibroService.service';

describe('Service: InserisciLibroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InserisciLibroServiceService]
    });
  });

  it('should ...', inject([InserisciLibroServiceService], (service: InserisciLibroServiceService) => {
    expect(service).toBeTruthy();
  }));
});
