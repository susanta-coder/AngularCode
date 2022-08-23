import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../../../shared/services/notifications.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from "../../services/user.service";
import { VendorpopupComponent } from '../vendorpopup/vendorpopup.component';

@Component({
  selector: 'app-vendor-users',
  templateUrl: './vendor-users.component.html',
  styleUrls: ['./vendor-users.component.scss'],
})
export class VendorUsersComponent implements OnInit {
  vendorpopupComponentRef = VendorpopupComponent;
  users: any;
  user: any;
  roleId = 3;
  screeningResult = 'Selected';
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
      .getAllUserDetailsByRoleId(this.roleId)
      .pipe(first())
      .subscribe((data) => {
        this.isLoading = false;
        this.users = data;
      });
  }
  getJdDetailsBasedUserIdHyperLink(userId: any) {
    this.userService.getJdDetailsByUserId(userId);
  }
  getCandidateDetailsByUserIdhyperLink(userId: any) {
    this.userService.getCandidateDetailsByUserIdhyperLink(userId);
  }
  getSelectedCandidatehyperLink(userId: any) {
    this.userService.getSelectedCandidatehyperLink(
      userId,
      this.screeningResult
    );
  }
  openDialog1(vendorpopupComponentRef: any, user: any): void {
   this.userService
      .getVendorById(user.id)
      .pipe(first())
      .subscribe((data) => {
        this.dialog.open(vendorpopupComponentRef, {
          width: '580px',
          data: { detailsVendor: data },

        });
      });
  }
}
