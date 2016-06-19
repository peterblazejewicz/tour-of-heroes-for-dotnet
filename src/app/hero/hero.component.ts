import { Component, OnInit, OnDestroy, } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css']
})

export class HeroComponent implements OnInit, OnDestroy {

  private subscription: ISubscription;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      let id = parseInt(params['id'], 10);
      // todo service call
      // this.service
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
