import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileService } from '../../services/profile.service';
import { JdpopupComponent } from '../jdpopup/jdpopup.component';
import { JobdescriptionService } from '../../services/jobdescription.service';

@Component({
  selector: 'app-chngscrpopup',
  templateUrl: './chngscrpopup.component.html',
  styleUrls: ['./chngscrpopup.component.scss'],
})
export class ChngscrpopupComponent implements OnInit {
  jdId!: string;
  name!: any;
  primarySkills!: string;
  totalExprience!: any;
  refererName!: any;
  user!: any;
  emailId!: any;
  id!: any;
  roleId = 4;
  screeners!: any;

  constructor(
    private notifications: NotificationsService,
    private profileService: ProfileService,
    private jobdescriptionService: JobdescriptionService,
    private router: Router,
    private route: ActivatedRoute,
    private injector: Injector,
    public dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public dailogData: any
  ) {}

  ngOnInit(): void {
    this.user = this.dailogData.user;
    let obj = this.user.candidateProfileStatus;
    for (let i = 0; i < obj.length; i++) {
      this.id = obj[i].id;
    }
    this.profileService
      .getScreenerList(this.roleId)
      .pipe(first())
      .subscribe((data) => (this.screeners = data));
  }

  changeScreener(myForm: any): void {
    let changeScreenerDetails = {
      id: this.id,
      emailId: this.emailId,
    };
    if (!myForm.invalid) {
      this.profileService
        .changeScreener(changeScreenerDetails)
        .pipe(first())
        .subscribe(
          (result) =>
            this.notifications.showNotification('top', 'center', result),
          (error) => {
            this.notifications.showNotification(
              'top',
              'center',
              error.message,
              4
            );
          }
        );
    }
  }
}
