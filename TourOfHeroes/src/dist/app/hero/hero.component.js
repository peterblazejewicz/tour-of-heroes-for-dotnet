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
var router_1 = require('@angular/router');
var angular2_polymer_1 = require('@vaadin/angular2-polymer');
var heroes_service_1 = require('../heroes/heroes.service');
var HeroComponent = (function () {
    function HeroComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    HeroComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        this.service.getHero(id)
            .then(function (hero) {
            _this.hero = hero;
        });
    };
    HeroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-hero',
            templateUrl: 'hero.component.html',
            styleUrls: ['hero.component.css'],
            directives: [
                angular2_polymer_1.PolymerElement('paper-input'),
                angular2_polymer_1.PolymerElement('vaadin-date-picker')
            ],
            providers: [
                heroes_service_1.HeroesService
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, heroes_service_1.HeroesService])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=../../src/app/hero/hero.component.js.map