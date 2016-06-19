import { provideRouter, RouterConfig } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesRoutes } from './heroes/heroes.routes';

export const routes: RouterConfig = [
  ...HeroesRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
