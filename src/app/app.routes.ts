import { Routes } from '@angular/router';
import {SignInPage} from './iam/pages/sign-in-page/sign-in-page';
import {DashboardPage} from './dashboard/pages/dashboard-page/dashboard-page';

export const routes: Routes = [
  {path: "login"            ,component: SignInPage},
  {path: "dashboard"            ,component: DashboardPage},
];
