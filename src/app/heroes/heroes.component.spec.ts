/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

describe('Component: Heroes', () => {
  // TODO
  beforeEachProviders(() => [Router]);

  it('should create an instance', inject([Router],
    (router: Router) => {
      let component = new HeroesComponent(router);
      expect(component).toBeTruthy();
    }));

});
