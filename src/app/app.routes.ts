import { Routes } from '@angular/router';
import {SignInPage} from './iam/pages/sign-in-page/sign-in-page';
import {DashboardPage} from './dashboard/pages/dashboard-page/dashboard-page';
import {CreateHotelPage} from './hotel/pages/create-hotel-page/create-hotel-page';
import {
  CreateAdministratorProfilePage
} from './profiles/pages/create-administrator-profile-page/create-administrator-profile-page';
import {CreateRoomClassPage} from './hotel/pages/create-room-class-page/create-room-class-page';
import {CreateRoomPage} from './rooms/pages/create-room-page/create-room-page';
import {
  CreateAdminFromInvitationPage
} from './profiles/pages/create-admin-from-invitation-page/create-admin-from-invitation-page';

export const routes: Routes = [
  {path: "login"            ,component: SignInPage},
  {path: "dashboard"            ,component: DashboardPage},
  {path: "create-hotel"            ,component: CreateHotelPage},
  {path: "administrator-sign-up"            ,component: CreateAdministratorProfilePage},
  {path: "room-classes"            ,component: CreateRoomClassPage},
  {path: "rooms"            ,component: CreateRoomPage},
  {path: "signup/:token/:hotelId"            ,component: CreateAdminFromInvitationPage},
];
