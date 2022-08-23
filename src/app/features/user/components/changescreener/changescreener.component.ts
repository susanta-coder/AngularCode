import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../../../shared/services/notifications.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { JobdescriptionService } from '../../services/jobdescription.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChngscrpopupComponent } from '../chngscrpopup/chngscrpopup.component';
import { JdpopupComponent } from '../jdpopup/jdpopup.component';

@Component({
  selector: 'app-changescreener',
  templateUrl: './changescreener.component.html',
  styleUrls: ['./changescreener.component.scss'],
})
export class ChangescreenerComponent implements OnInit {
  users: any;
  chngscrpopupComponentRef = ChngscrpopupComponent;
  jdpopupComponentRef = JdpopupComponent;

  constructor(
    private notifications: NotificationsService,
    private profileService: ProfileService,
    private jobdescriptionService: JobdescriptionService,
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.profileService
      .getChangeScreenerDetails()
      .pipe(first())
      .subscribe((data) => (this.users = data));
  }

  openDialog(chngscrpopupComponentRef: any, user: any): void {
    let dialogRef = this.dialog.open(chngscrpopupComponentRef, {
      width: '580px',
      data: { user: user },
    });
  }
  openDialogJdId(jdpopupComponentRef: any, user: any): void {
    this.jobdescriptionService
      .getJdDetailsByJdId(user.jdId)
      .pipe(first())
      .subscribe((data) => {
        this.dialog.open(jdpopupComponentRef, {
          width: '580px',
          data: { jdDetails: data },
        });
      });
  }
}
