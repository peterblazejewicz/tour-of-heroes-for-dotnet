/* tslint:disable:no-unused-variable */
"use strict";
var router_1 = require('@angular/router');
var heroes_service_1 = require('./heroes.service');
var testing_1 = require('@angular/core/testing');
var heroes_component_1 = require('./heroes.component');
testing_1.describe('Component: Heroes', function () {
    // TODO
    testing_1.beforeEachProviders(function () { return [router_1.Router, heroes_service_1.HeroesService]; });
    testing_1.it('should create an instance', testing_1.inject([router_1.Router, heroes_service_1.HeroesService], function (router, service) {
        var component = new heroes_component_1.HeroesComponent(router, service);
        testing_1.expect(component).toBeTruthy();
    }));
});
//# sourceMappingURL=../../src/app/heroes/heroes.component.spec.js.map