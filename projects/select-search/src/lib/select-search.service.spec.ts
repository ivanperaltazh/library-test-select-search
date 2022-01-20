import { TestBed } from '@angular/core/testing';

import { SelectSearchService } from './select-search.service';

describe('SelectSearchService', () => {
  let service: SelectSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
