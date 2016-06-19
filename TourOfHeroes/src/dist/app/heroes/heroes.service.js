"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HEROES = [
    { "id": 11, "name": "Mr. Nice", "birthday": "1980-01-11" },
    { "id": 12, "name": "Narco", "birthday": "1980-01-12" },
    { "id": 13, "name": "Bombasto", "birthday": "1980-01-13" },
    { "id": 14, "name": "Celeritas", "birthday": "1980-01-14" },
    { "id": 15, "name": "Magneta", "birthday": "1980-01-15" },
    { "id": 16, "name": "RubberMan", "birthday": "1980-01-16" },
    { "id": 17, "name": "Dynama", "birthday": "1980-01-17" },
    { "id": 18, "name": "Dr IQ", "birthday": "1980-01-18" },
    { "id": 19, "name": "Magma", "birthday": "1980-01-19" },
    { "id": 20, "name": "Tornado", "birthday": "1980-01-20" }
];
var heroesPromise = Promise.resolve(HEROES);
/**
 * (description)
 *
 * @export
 * @class HeroesService
 */
var HeroesService = (function () {
    function HeroesService() {
    }
    /**
     * (description)
     *
     * @returns {Promise<Hero[]>} (description)
     */
    HeroesService.prototype.getHeroes = function () {
        return heroesPromise;
    };
    /**
     * (description)
     *
     * @param {(number | string)} id (description)
     * @returns (description)
     */
    HeroesService.prototype.getHero = function (id) {
        return heroesPromise
            .then(function (heroes) { return heroes.filter(function (hero) { return hero.id === +id; })[0]; });
    };
    HeroesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HeroesService);
    return HeroesService;
}());
exports.HeroesService = HeroesService;
//# sourceMappingURL=../../src/app/heroes/heroes.service.js.map