/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var heroes_service_1 = require('./heroes.service');
testing_1.describe('Heroes Service', function () {
    testing_1.beforeEachProviders(function () { return [heroes_service_1.HeroesService]; });
    testing_1.it('should ...', testing_1.inject([heroes_service_1.HeroesService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=../../src/app/heroes/heroes.service.spec.js.map