import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    PolymerElement('app-header-layout'),
    PolymerElement('app-header'),
    PolymerElement('app-toolbar'),
    PolymerElement('paper-icon-button')
  ]
})

export class AppComponent implements OnInit {

  title = 'Tour of Heroes';
  isInChildView = false;


  ngOnInit() {
  }

  goBack() {
  }

}
