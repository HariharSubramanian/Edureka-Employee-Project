import { TestBed } from '@angular/core/testing';

import { EmpConfigServiceService } from './emp-config-service.service';

describe('EmpConfigServiceService', () => {
  let service: EmpConfigServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpConfigServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
