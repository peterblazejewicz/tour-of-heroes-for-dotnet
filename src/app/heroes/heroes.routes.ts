import { RouterConfig } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroComponent } from '../hero/hero.component';

export const HeroesRoutes: RouterConfig = [
  { path: '/heroes', component: HeroesComponent },
  { path: '/hero/:id', component: HeroComponent }
]
