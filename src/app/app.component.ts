import { Component, OnInit } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router';
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

@Routes([
  {
    path: '/heroes',
    component: HeroesComponent,
    data: {
      title: 'All heroes',
      root: true
    }
  },
  {
    path: '/heroes/:id',
    name: 'HeroDetail',
    component: HeroComponent,
    data: {
      title: 'Hero detail'
    }
  }
])
export class AppComponent implements OnInit {

  title = 'Tour of Heroes';
  isInChildView = false;

  constructor(private _router: Router, private _data: RouteData){}

  ngOnInit() {
     let instrution = this._router;
     let data = this._data;
  }

  goBack() {
    this._router.navigate(['Heroes']);
  }

}
