import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from '../../../../shared/services/notifications.service';
import { MatDialog } from '@angular/material/dialog';
import { AddprofileComponent } from '../addprofile/addprofile.component';
import { JobdescriptionService } from '../../services/jobdescription.service';
import { CreatequeryComponent } from '../createquery/createquery.component';
import { JdpopupComponent } from '../jdpopup/jdpopup.component';

@Component({
  selector: 'app-open-jds',
  templateUrl: './open-jds.component.html',
  styleUrls: ['./open-jds.component.scss'],
})
export class OpenJdsComponent implements OnInit {
  users: any;
  addprofileComponentRef = AddprofileComponent;
  jdpopupComponentRef = JdpopupComponent;
  jdId: any;
  isLoading: boolean = false;
  createqueryComponentRef = CreatequeryComponent;
  role:any;

  constructor(
    public dialog: MatDialog,
    private notifications: NotificationsService,
    private jobdescriptionService: JobdescriptionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    let userId = this.route.snapshot.paramMap.get('userId');
    let clientuserId = this.route.snapshot.paramMap.get('clientuserId');
    let jdStatus = this.route.snapshot.paramMap.get('jdStatus');
    this.jobdescriptionService
    .getUserDetais()
    .pipe(first())
    .subscribe((data) => {
        this.isLoading = false;
        this.role = data;
    });
    if (clientuserId != null && jdStatus != null) {
      this.jobdescriptionService
        .getJdDetailsByClientUserIdAndOpenStatus(clientuserId)
        .pipe(first())
        .subscribe((data) => (this.users = data));
    } else if (userId != null) {
      this.jobdescriptionService
        .getJdDetailsByUserId(userId)
        .pipe(first())
        .subscribe((data) => {
          this.isLoading = false;
          this.users = data;
        });
    } else if (clientuserId != null) {
      this.jobdescriptionService
        .getJdDetailsByClientUserId(clientuserId)
        .pipe(first())
        .subscribe((data) => {
          this.isLoading = false;
          this.users = data;
        });
    } else {
      this.jobdescriptionService
        .getJdDetails()
        .pipe(first())
        .subscribe((data) => {
          this.isLoading = false;
          this.users = data;
        });
    }
  }
  openDialog(addprofileComponentRef: any, jdId: any): void {
    let dialogRef = this.dialog.open(addprofileComponentRef, {
      width: '550px',
      data: { jdId: jdId },
    });
  }
  openDialog1(createqueryComponentRef: any, jdId: any): void {
    let dialogRef = this.dialog.open(createqueryComponentRef, {
      width: '550px',
      data: { jdId: jdId },
    });
  }
  openDialog2(jdpopupComponentRef: any, user: any): void {
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
}
