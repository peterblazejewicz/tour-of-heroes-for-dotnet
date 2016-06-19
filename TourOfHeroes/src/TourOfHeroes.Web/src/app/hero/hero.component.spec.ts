/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../heroes/heroes.service';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HeroComponent } from './hero.component';

describe('Component: Hero', () => {
  // TODO
  beforeEachProviders(() => [ActivatedRoute, Router, HeroesService]);

  it('should create an instance', inject([ActivatedRoute, HeroesService],
    (route: ActivatedRoute, router: Router, service: HeroesService) => {
      let component = new HeroComponent(route, router, service);
      expect(component).toBeTruthy();
    }));

});
