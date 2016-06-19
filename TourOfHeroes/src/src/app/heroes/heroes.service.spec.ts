/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { HeroesService } from './heroes.service';

describe('Heroes Service', () => {
  beforeEachProviders(() => [HeroesService]);

  it('should ...',
      inject([HeroesService], (service: HeroesService) => {
    expect(service).toBeTruthy();
  }));
});
