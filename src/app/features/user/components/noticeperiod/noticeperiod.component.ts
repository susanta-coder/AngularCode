import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../../../shared/services/notifications.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { SubmitprofileComponent } from '../submitprofile/submitprofile.component';
import { UserService } from "../../services/user.service";
import { JobdescriptionService } from '../../services/jobdescription.service';
import { CandidatepopupComponent } from '../candidatepopup/candidatepopup.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-noticeperiod',
  templateUrl: './noticeperiod.component.html',
  styleUrls: ['./noticeperiod.component.scss']
})
export class NoticeperiodComponent implements OnInit {
  users: any;
  candidatepopupComponentRef= CandidatepopupComponent;

  constructor(

    private userService: UserService,
    private notifications: NotificationsService,
    private profileService: ProfileService,
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
       this.profileService
      .getNoticePeriod()
      .pipe(first())
      .subscribe((data) => (this.users = data));

    }

    openDialog1(candidatepopupComponentRef: any, user: any): void {
      console.log(user);
      this.profileService
          .getProfileById(user.id)
          .pipe(first())
          .subscribe((data) => {
            this.dialog.open(candidatepopupComponentRef, {
              width: '580px',
              data: { profileDetails: data },
            });
          });
      }

}




