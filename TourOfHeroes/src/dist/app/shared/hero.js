"use strict";
/**
 * (description)
 *
 * @export
 * @class Hero
 */
var Hero = (function () {
    /**
     * Creates an instance of Hero.
     *
     * @param {number} id (description)
     * @param {string} name (description)
     * @param {string} birthday (description)
     */
    function Hero(id, name, birthday) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=../../src/app/shared/hero.js.map