import { TestBed } from '@angular/core/testing';

import { DataConnectionService } from './data-connection.service';

describe('DataConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataConnectionService = TestBed.get(DataConnectionService);
    expect(service).toBeTruthy();
  });
});
