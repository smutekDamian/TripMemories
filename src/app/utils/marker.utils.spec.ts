import { TestBed } from '@angular/core/testing';

import { MarkerUtils } from './marker.utils';

describe('ThumbnailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkerUtils = TestBed.get(MarkerUtils);
    expect(service).toBeTruthy();
  });
});
