import { Injectable } from '@angular/core';
import { Hero } from '../shared';

let HEROES: Hero[] = [
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
]

let heroesPromise: Promise<Hero[]> = Promise.resolve(HEROES);

/**
 * (description)
 *
 * @export
 * @class HeroesService
 */
@Injectable()
export class HeroesService {

  /**
   * (description)
   *
   * @returns {Promise<Hero[]>} (description)
   */
  getHeroes(): Promise<Hero[]> {
    return heroesPromise;
  }

  /**
   * (description)
   *
   * @param {(number | string)} id (description)
   * @returns (description)
   */
  getHero(id: number | string): Promise<Hero> {
    return heroesPromise
      .then(heroes => heroes.filter(hero => hero.id === +id)[0])
  }
}

