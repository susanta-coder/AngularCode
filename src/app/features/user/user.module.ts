import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UserProfileComponent } from "./components//user-profile/user-profile.component";
import { NotificationsComponent } from "./components//notifications/notifications.component";
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../shared/material.module";
import { OpenJdsComponent } from './components/open-jds/open-jds.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { CreateJdComponent } from './components/create-jd/create-jd.component';
import { VendorUsersComponent } from './components/vendor-users/vendor-users.component';
import { ClientUsersComponent } from './components/client-users/client-users.component';
import { ScreenersComponent } from './components/screeners/screeners.component';
import { StkhrCmnnComponent } from './components/stkhr-cmnn/stkhr-cmnn.component';
import { AddprofileComponent } from './components/addprofile/addprofile.component';
import { SubmitprofileComponent } from "./components/submitprofile/submitprofile.component";
import { ScreenerPendingComponent } from "./components/screener-pending/screener-pending.component";
import { JdpopupComponent } from './components/jdpopup/jdpopup.component';
import { ScreeningCompleteComponent } from './components/screening-complete/screening-complete.component';
import { CreatequeryComponent } from './components/createquery/createquery.component';
import { CandidatepopupComponent } from './components/candidatepopup/candidatepopup.component';
import { VendorpopupComponent } from './components/vendorpopup/vendorpopup.component';
import { QueryResponseComponent } from './components/query-response/query-response.component';
import { NoticeperiodComponent } from './components/noticeperiod/noticeperiod.component';
import { VuserprofilecntComponent } from './components/vuserprofilecnt/vuserprofilecnt.component';
import { ResolvequeryComponent } from "./components/resolvequery/resolvequery.component";
import { ProfileStatusSummaryComponent } from './components/profile-status-summary/profile-status-summary.component';
import { ChangescreenerComponent } from "./components/changescreener/changescreener.component";
import { ChngscrpopupComponent } from "./components/chngscrpopup/chngscrpopup.component";

@NgModule({
    declarations: [
        UserComponent,
        DashboardComponent,
        UserProfileComponent,
        NotificationsComponent,
        OpenJdsComponent,
        ProfilesComponent,
        CreateJdComponent,
        VendorUsersComponent,
        ClientUsersComponent,
        ScreenersComponent,
        StkhrCmnnComponent,
        AddprofileComponent,
        SubmitprofileComponent,
        ScreenerPendingComponent,
        JdpopupComponent,
        ScreeningCompleteComponent,
        CreatequeryComponent,
        CandidatepopupComponent,
        VendorpopupComponent,
        QueryResponseComponent,
        NoticeperiodComponent,
        VuserprofilecntComponent,
        ResolvequeryComponent,
        ProfileStatusSummaryComponent,
        ChangescreenerComponent,
        ChngscrpopupComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UserRoutingModule,
        SharedModule,
        MaterialModule
    ]
})
export class UserModule {}
