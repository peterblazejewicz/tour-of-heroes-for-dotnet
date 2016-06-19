/* tslint:disable:no-unused-variable */
"use strict";
var router_1 = require('@angular/router');
var heroes_service_1 = require('../heroes/heroes.service');
var testing_1 = require('@angular/core/testing');
var hero_component_1 = require('./hero.component');
testing_1.describe('Component: Hero', function () {
    // TODO
    testing_1.beforeEachProviders(function () { return [router_1.ActivatedRoute, router_1.Router, heroes_service_1.HeroesService]; });
    testing_1.it('should create an instance', testing_1.inject([router_1.ActivatedRoute, heroes_service_1.HeroesService], function (route, router, service) {
        var component = new hero_component_1.HeroComponent(route, router, service);
        testing_1.expect(component).toBeTruthy();
    }));
});
//# sourceMappingURL=../../src/app/hero/hero.component.spec.js.map