/* tslint:disable:no-unused-variable */
import { Http } from '@angular/http';
import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { HeroesService } from './heroes.service';

describe('Heroes Service', () => {
  beforeEachProviders(() => [Http]);

  it('should ...',
    inject([Http],
      (http: Http) => {
        let service = new HeroesService(http);
        expect(service).toBeTruthy();
      }));
});
