"use strict";
var router_1 = require('@angular/router');
var heroes_routes_1 = require('./heroes/heroes.routes');
exports.routes = heroes_routes_1.HeroesRoutes.slice();
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=../src/app/app.routes.js.map