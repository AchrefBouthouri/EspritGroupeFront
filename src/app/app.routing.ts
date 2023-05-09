import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import {LoginPageComponent} from "./main-app/user/login-page/login-page.component";
import {RegisterComponent} from "./main-app/user/register/register.component";
import {AddRolesComponent} from "./main-app/user/admin/roles/add-roles/add-roles.component";
import {GetUsersComponent} from "./main-app/user/admin/users/get-users/get-users.component";
import {RoleToUserComponent} from "./main-app/user/admin/users/role-to-user/role-to-user.component";

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
        path: 'role',
        component:AddRolesComponent
      },
      {
        path: 'users',
        component:GetUsersComponent
      },
      {
        path: 'roleToUser',
        component:RoleToUserComponent
      },
      {
        path: '',
        loadChildren: () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];
