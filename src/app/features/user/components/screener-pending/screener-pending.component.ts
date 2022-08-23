import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { NotificationsService } from '../../../../shared/services/notifications.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { SubmitprofileComponent } from '../submitprofile/submitprofile.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-screener-pending',
  templateUrl: './screener-pending.component.html',
  styleUrls: ['./screener-pending.component.scss'],
})
export class ScreenerPendingComponent implements OnInit {
  users: any;
  status = 'PENDING';
  submitprofileComponentRef = SubmitprofileComponent;
  constructor(
    private notifications: NotificationsService,
    private profileService: ProfileService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.profileService
      .getProfilesForScreener(this.status)
      .pipe(first())
      .subscribe((data) => (this.users = data));
  }

  openDialog(submitprofileComponentRef: any, user: any): void {
    let dialogRef = this.dialog.open(submitprofileComponentRef, {
      width: '680px',
      height: '2000px',
      data: { user: user },
    });
  }
}
