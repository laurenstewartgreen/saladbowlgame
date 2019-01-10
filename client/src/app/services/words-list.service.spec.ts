import { TestBed } from '@angular/core/testing';

import { WordsListService } from './words-list.service';

describe('WordsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordsListService = TestBed.get(WordsListService);
    expect(service).toBeTruthy();
  });
});
