import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient } from '../../../node_modules/@angular/common/http';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          UserService,
          {provide: HttpClient , userValue: {}}
        ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
