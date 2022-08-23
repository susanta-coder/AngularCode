import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegisterComponent } from './components/register/register.component';
import { NotificationsService } from './services/notifications.service';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
@NgModule({
  declarations: [FooterComponent, NavbarComponent, SidebarComponent,RegisterComponent, ProgressBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    [FooterComponent,NavbarComponent, SidebarComponent,RegisterComponent,ProgressBarComponent]
  ],
  providers: [NotificationsService],
})
export class SharedModule { }
