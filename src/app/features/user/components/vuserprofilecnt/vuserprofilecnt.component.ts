import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../../../shared/services/notifications.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-vuserprofilecnt',
  templateUrl: './vuserprofilecnt.component.html',
  styleUrls: ['./vuserprofilecnt.component.scss'],
})
export class VuserprofilecntComponent implements OnInit {
  user: any;
  isLoading: boolean = false;

  constructor(
    public dialog: MatDialog,
    private notifications: NotificationsService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.userService
      .getVendorUserProfileSubmittedDetails()
      .pipe(first())
      .subscribe((data) => {
        this.isLoading = false;
        this.user = data;
      });
  }

  getCandidateDetailsByUserIdhyperLink(userId: any) {
    this.userService.getCandidateDetailsByUserIdhyperLink(userId);
  }
}
