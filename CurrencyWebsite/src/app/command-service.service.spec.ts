import { TestBed, inject } from '@angular/core/testing';

import { CommandServiceService } from './command-service.service';

describe('CommandServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommandServiceService]
    });
  });

  it('should be created', inject([CommandServiceService], (service: CommandServiceService) => {
    expect(service).toBeTruthy();
  }));
});
