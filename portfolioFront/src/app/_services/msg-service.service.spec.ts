/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MsgServiceService } from './msg-service.service';

describe('Service: MsgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsgServiceService]
    });
  });

  it('should ...', inject([MsgServiceService], (service: MsgServiceService) => {
    expect(service).toBeTruthy();
  }));
});
