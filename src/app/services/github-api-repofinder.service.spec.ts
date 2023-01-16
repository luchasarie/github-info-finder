import { TestBed } from '@angular/core/testing';

import { GithubApiRepofinderService } from './github-api-repofinder.service';

describe('GithubApiRepofinderService', () => {
  let service: GithubApiRepofinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubApiRepofinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
