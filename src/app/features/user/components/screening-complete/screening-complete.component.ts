import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { NotificationsService } from '../../../../shared/services/notifications.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { SubmitprofileComponent } from '../submitprofile/submitprofile.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-screening-complete',
  templateUrl: './screening-complete.component.html',
  styleUrls: ['./screening-complete.component.scss'],
})
export class ScreeningCompleteComponent implements OnInit {
  users: any;
  screeningResult: any;
  submitprofileComponentRef = SubmitprofileComponent;
  constructor(
    private notifications: NotificationsService,
    private profileService: ProfileService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.screeningResult = ['Selected', 'Rejected'];
    this.profileService
      .getCompletedPorfiles(this.screeningResult)
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
