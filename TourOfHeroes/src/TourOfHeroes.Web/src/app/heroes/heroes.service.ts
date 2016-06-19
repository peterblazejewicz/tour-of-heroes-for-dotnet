import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Hero } from '../shared';

/**
 * (description)
 *
 * @export
 * @class HeroesService
 */
@Injectable()
export class HeroesService {

  private API_HEROES: string = 'http://localhost:5000/api/heroes';

  constructor(private http: Http) { }
  /**
   * (description)
   *
   * @returns {Promise<Hero[]>} (description)
   */
  getHeroes(): Observable<Hero[]> {
    return this.http
      .get(this.API_HEROES)
      .map(res => res.json() || [])
      .catch(error => {
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
      });
  }

  /**
   * (description)
   *
   * @param {(number | string)} id (description)
   * @returns (description)
   */
  getHero(id: number | string): Observable<Hero> {
    return this.http
      .get(`${this.API_HEROES}/${id}`)
      .map(res => res.json() || {})
      .catch(error => {
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
      });
  }
}

