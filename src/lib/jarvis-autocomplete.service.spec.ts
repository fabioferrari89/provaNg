import { TestBed } from '@angular/core/testing';

import { JarvisAutocompleteService } from './jarvis-autocomplete.service';

describe('JarvisAutocompleteService', () => {
  let service: JarvisAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JarvisAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
