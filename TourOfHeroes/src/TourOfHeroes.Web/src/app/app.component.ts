import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES, RouterState}  from '@angular/router';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { ISubscription } from 'rxjs/Subscription';
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

export class AppComponent implements OnInit, OnDestroy {

  title = 'Tour of Heroes';
  subscription: ISubscription

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() { }

  ngOnDestroy() { }

  goBack() {
    this.router.navigate(['/heroes']);
  }

}
