/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
testing_1.beforeEachProviders(function () { return [router_1.ActivatedRoute, router_1.Router]; });
testing_1.describe('App: TourOfHeroes', function () {
    testing_1.it('should create the app', testing_1.inject([router_1.ActivatedRoute, router_1.Router], function (route, router) {
        var app = new app_component_1.AppComponent(route, router);
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'app works!\'', testing_1.inject([router_1.ActivatedRoute, router_1.Router], function (route, router) {
        var app = new app_component_1.AppComponent(route, router);
        testing_1.expect(app.title).toEqual('app works!');
    }));
});
//# sourceMappingURL=../src/app/app.component.spec.js.map