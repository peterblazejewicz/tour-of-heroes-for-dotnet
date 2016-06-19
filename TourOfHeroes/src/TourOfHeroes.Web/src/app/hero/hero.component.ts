import { Component, OnInit, OnDestroy, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { HeroesService } from '../heroes/heroes.service';
import { Hero } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css'],
  directives: [
    PolymerElement('paper-input'),
    PolymerElement('vaadin-date-picker')
  ],
  providers: [
    HeroesService
  ]
})

export class HeroComponent implements OnInit {

  hero: Hero;

  constructor(private route: ActivatedRoute, private router: Router, private service: HeroesService) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.service.getHero(id)
      .subscribe(
        hero => this.hero = hero,
        error => console.log(error)
      );
  }

}
