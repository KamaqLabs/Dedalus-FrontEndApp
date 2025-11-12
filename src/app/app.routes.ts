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
import {HotelCreatedGuard} from './hotel/models/hotel-created.guard';
import {AuthGuard} from './iam/guards/Auth.guard';
import {PresentationPage} from './public/pages/presentation-page/presentation-page';

import {ComponentDashboardIot} from './DashboardIot/components/component-dashboard-iot/component-dashboard-iot';
import {ComponentReservation} from './Reservation/components/component-reservation/component-reservation';


export const routes: Routes = [
  {path: ""            ,component: PresentationPage},
  {path: "login"            ,component: SignInPage},
  {path: "dashboard", component: DashboardPage, canActivate: [AuthGuard]},
  {path: "create-hotel"            ,component: CreateHotelPage},
  {path: "administrator-sign-up", component: CreateAdministratorProfilePage, canActivate: [HotelCreatedGuard]},
  {path: "room-classes"            ,component: CreateRoomClassPage},
  {path: "rooms"            ,component: CreateRoomPage},
  {path: "signup/:token/:hotelId"            ,component: CreateAdminFromInvitationPage},
  { path: 'iot', component: ComponentDashboardIot },
  { path: 'reservations', component: ComponentReservation }
];
