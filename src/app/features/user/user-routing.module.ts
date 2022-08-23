import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UserProfileComponent } from "./components//user-profile/user-profile.component";
import { NotificationsComponent } from "./components//notifications/notifications.component";
import { OpenJdsComponent } from './components/open-jds/open-jds.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { CreateJdComponent } from './components/create-jd/create-jd.component';
import { VendorUsersComponent } from './components/vendor-users/vendor-users.component';
import { ClientUsersComponent } from './components/client-users/client-users.component';
import { ScreenersComponent } from './components/screeners/screeners.component';
import { StkhrCmnnComponent } from './components/stkhr-cmnn/stkhr-cmnn.component';

import { RegisterComponent } from "../../shared/components/register/register.component";
import { ScreenerPendingComponent } from './components/screener-pending/screener-pending.component';
import { ScreeningCompleteComponent } from './components/screening-complete/screening-complete.component';
import { QueryResponseComponent } from './components/query-response/query-response.component';
import { NoticeperiodComponent } from './components/noticeperiod/noticeperiod.component';
import { VuserprofilecntComponent } from './components/vuserprofilecnt/vuserprofilecnt.component';
import { ProfileStatusSummaryComponent } from './components/profile-status-summary/profile-status-summary.component';
import { ChangescreenerComponent } from './components/changescreener/changescreener.component';
const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'create-jd',     component: CreateJdComponent },
  { path: 'open-jds',     component: OpenJdsComponent },
  { path: 'profiles',     component: ProfilesComponent },
  { path: 'vendor-users',  component: VendorUsersComponent },
  { path: 'client-users',   component: ClientUsersComponent },
  { path: 'screeners',      component: ScreenersComponent },
  { path: 'stkhr-cmnn',      component: StkhrCmnnComponent },
  { path: 'notifications',  component: NotificationsComponent },
  { path: 'register-vendor',  component:   RegisterComponent,data : {userTypes : 'Vendor'}},
  { path: 'register-user',  component:   RegisterComponent,data : {userTypes : 'Client_User'}},
  { path: 'screening-pending',     component: ScreenerPendingComponent },
  { path: 'screening-complete',     component: ScreeningCompleteComponent },
  { path: 'query-response',     component: QueryResponseComponent },
  { path: 'noticeperiod',     component: NoticeperiodComponent },
  { path: 'viewVUserProfileCnt',     component: VuserprofilecntComponent },
  { path: 'profile-status-summary',     component: ProfileStatusSummaryComponent },
  { path: 'changescreener',     component: ChangescreenerComponent },
  { path: 'register-vendoruser',  component:   RegisterComponent,data : {userTypes : 'Vendor_User'}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
