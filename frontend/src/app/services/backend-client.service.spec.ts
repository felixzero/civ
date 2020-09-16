import {TestBed} from '@angular/core/testing';

import {BackendClientService} from './backend-client.service';

describe('BackendClientServiceService', () => {
  let service: BackendClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
