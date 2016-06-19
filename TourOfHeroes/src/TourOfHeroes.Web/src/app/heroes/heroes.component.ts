import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { Hero } from '../shared';
import { HeroesService } from './heroes.service';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [
    PolymerElement('vaadin-grid')
  ],
  providers: [
    HeroesService
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private router: Router, private service: HeroesService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelectedItemsChanged(event: any) {
    let selectedIndex: number = event.target.selection.selected()[0];
    if (selectedIndex !== undefined) {
      this.goToHeroDetailById(this.heroes[selectedIndex].id);
    }
  }

  private getHeroes() {
    this.service.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes,
        error => console.log(error)
      );
  }

  private goToHeroDetailById(id: number) {
    this.router.navigate(['/hero', id]);
  }

}
