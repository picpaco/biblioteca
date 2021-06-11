/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EliminaCopiaService } from './eliminaCopia.service';

describe('Service: EliminaCopia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EliminaCopiaService]
    });
  });

  it('should ...', inject([EliminaCopiaService], (service: EliminaCopiaService) => {
    expect(service).toBeTruthy();
  }));
});
