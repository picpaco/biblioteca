/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ControlloLoginService } from './controlloLogin.service';

describe('Service: ControlloLogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlloLoginService]
    });
  });

  it('should ...', inject([ControlloLoginService], (service: ControlloLoginService) => {
    expect(service).toBeTruthy();
  }));
});
