import { TestBed } from '@angular/core/testing';

import { NewEmpDataService } from './new-emp-data.service';

describe('NewEmpDataService', () => {
  let service: NewEmpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewEmpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
