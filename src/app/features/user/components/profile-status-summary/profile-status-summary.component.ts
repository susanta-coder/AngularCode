import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { JdpopupComponent } from '../jdpopup/jdpopup.component';
import { ProfileService } from '../../services/profile.service';
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Router } from '@angular/router';
import { JobdescriptionService } from '../../services/jobdescription.service';

@Component({
  selector: 'app-profile-status-summary',
  templateUrl: './profile-status-summary.component.html',
  styleUrls: ['./profile-status-summary.component.scss']
})
export class ProfileStatusSummaryComponent implements OnInit {
  users: any;
  status = 'Rejected';

  jdpopupComponentRef = JdpopupComponent;

  constructor(
    private jobdescriptionService: JobdescriptionService,
    private profileService: ProfileService,
    private userService: UserService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let status = this.route.snapshot.paramMap.get('status');
    this.jobdescriptionService
    .getProfilesCurrentStatusSummary()
    .pipe(first())
    .subscribe((data) => (this.users = data));
}

  openDialog(jdpopupComponentRef: any, user: any): void {
    this.jobdescriptionService
      .getJdDetailsByJdId(user.id)
      .pipe(first())
      .subscribe((data) => {
        this.dialog.open(jdpopupComponentRef, {
          width: '580px',
          data: { jdDetails: data },
        });
      });
  }

    getProfilesBasedRejectHyperLink() {
    this.profileService.getCandidateDetailsByScreeningRejectionHyperLink(this.status)
   }


}
