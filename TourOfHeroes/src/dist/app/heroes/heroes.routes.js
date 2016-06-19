"use strict";
var heroes_component_1 = require('./heroes.component');
var hero_component_1 = require('../hero/hero.component');
exports.HeroesRoutes = [
    { path: '/heroes', component: heroes_component_1.HeroesComponent, index: true },
    { path: '/hero/:id', component: hero_component_1.HeroComponent }
];
//# sourceMappingURL=../../src/app/heroes/heroes.routes.js.map