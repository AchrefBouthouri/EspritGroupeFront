import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { FoyerComponent } from './main-app/foyer/foyer.component';
import { RestaurantComponent } from './main-app/restaurant/restaurant.component';
import {HomepageComponent} from "./homepage/homepage.component";
import {CaloriesComponent} from "./main-app/restaurant/calories/calories.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ],

  },
  {
    path: 'restaurant',
    component: RestaurantComponent
  },
  {
    path: 'foyer',
    component: FoyerComponent
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'calories',
    component: CaloriesComponent
  },

];
