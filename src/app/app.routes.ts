import { Routes } from '@angular/router';
import {SignInPage} from './iam/pages/sign-in-page/sign-in-page';
import {DashboardPage} from './dashboard/pages/dashboard-page/dashboard-page';
import {CreateHotelPage} from './hotel/pages/create-hotel-page/create-hotel-page';
import {
  CreateAdministratorFormComponent
} from './profiles/components/create-administrator-form-component/create-administrator-form-component';
import {
  CreateAdministratorProfilePage
} from './profiles/pages/create-administrator-profile-page/create-administrator-profile-page';

export const routes: Routes = [
  {path: "login"            ,component: SignInPage},
  {path: "dashboard"            ,component: DashboardPage},
  {path: "create-hotel"            ,component: CreateHotelPage},
  {path: "administrator-sign-up"            ,component: CreateAdministratorProfilePage},
];
