import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {BackendClientService} from './backend-client.service';

describe('BackendClientServiceService', () => {
  let service: BackendClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(BackendClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
