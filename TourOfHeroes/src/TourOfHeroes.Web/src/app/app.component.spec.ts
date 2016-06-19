/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from './app.component';

beforeEachProviders(() => [ActivatedRoute, Router]);

describe('App: TourOfHeroes', () => {
  it('should create the app',
    inject([ActivatedRoute, Router],
      (route: ActivatedRoute, router: Router) => {
        let app = new AppComponent(route, router);
        expect(app).toBeTruthy();
      }));

  it('should have as title \'app works!\'',
    inject([ActivatedRoute, Router],
      (route: ActivatedRoute, router: Router) => {
        let app = new AppComponent(route, router);
        expect(app.title).toEqual('app works!');
      }));
});
