import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from "./shared/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthService } from './core/services/auth.service';
import { AuthGuard } from './core/services/auth.guard';
import { APIInterceptor } from './core/apiInterceptor';
import { UserService } from './features/user/services/user.service';
import { JobdescriptionService } from './features/user/services/jobdescription.service';
import { ProfileService } from './features/user/services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    JwtModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true,
  },UserService,JobdescriptionService,ProfileService,AuthService,AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
