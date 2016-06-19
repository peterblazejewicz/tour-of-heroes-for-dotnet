/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from './heroes.service';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

describe('Component: Heroes', () => {
  // TODO
  beforeEachProviders(() => [Router, HeroesService]);

  it('should create an instance', inject([Router, HeroesService],
    (router: Router, service: HeroesService) => {
      let component = new HeroesComponent(router, service);
      expect(component).toBeTruthy();
    }));

});
