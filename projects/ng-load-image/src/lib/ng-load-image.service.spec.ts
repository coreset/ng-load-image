import { TestBed } from '@angular/core/testing';

import { NgLoadImageService } from './ng-load-image.service';

describe('NgLoadImageService', () => {
  let service: NgLoadImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgLoadImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
