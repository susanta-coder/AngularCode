import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../../../shared/services/notifications.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { SubmitprofileComponent } from '../submitprofile/submitprofile.component';
import { CandidatepopupComponent } from '../candidatepopup/candidatepopup.component';
import { JobdescriptionService } from '../../services/jobdescription.service';
import { JdpopupComponent } from '../jdpopup/jdpopup.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnInit {
  users: any;
  candidatepopupComponentRef = CandidatepopupComponent;
  jdpopupComponentRef = JdpopupComponent;
  isLoading: boolean = false;

  submitprofileComponentRef = SubmitprofileComponent;
  constructor(
    private notifications: NotificationsService,
    private profileService: ProfileService,
    private jobdescriptionService: JobdescriptionService,
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    let userId = this.route.snapshot.paramMap.get('userId');
    let screeningResult = this.route.snapshot.paramMap.get('screeningResult');
    let clientuserId = this.route.snapshot.paramMap.get('clientuserId');
    let candidateStatus = this.route.snapshot.paramMap.get('candidateStatus');
    let status = this.route.snapshot.paramMap.get('status');

    if (userId != null && screeningResult != null) {
      this.profileService
        .getCandidateDetailsByScreeningResultAndUserId(userId)
        .pipe(first())
        .subscribe((data) => (this.users = data));
    } else if (clientuserId != null && candidateStatus != null) {
      this.profileService
        .getCandidateDetailsByClientUserIdAndStatus(clientuserId)
        .pipe(first())
        .subscribe((data) => (this.users = data));
    } else if (clientuserId != null) {
      this.profileService
        .getCandidateDetailsByClientUserId(clientuserId)
        .pipe(first())
        .subscribe((data) => {
          this.isLoading = false;
          this.users = data;
        });
    } else if (userId != null) {
      this.profileService
        .getCandidateDetailsByUserId(userId)
        .pipe(first())
        .subscribe((data) => (this.users = data));
    }else if (status != null) {
      this.profileService
        .getCandidateDetailsByScreeningRejectionStatus(status)
        .pipe(first())
        .subscribe((data) => (this.users = data));

    }else {
      this.profileService
        .getProfiles()
        .pipe(first())
        .subscribe((data) => (this.users = data));
    }
  }

  openDialog(submitprofileComponentRef: any, user: any): void {
    let dialogRef = this.dialog.open(submitprofileComponentRef, {
      width: '680px',
      height: '2000px',
      data: { user: user },
    });
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

  openDialog2(jdpopupComponentRef: any, user: any): void {
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
