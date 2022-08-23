import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.scss'],
})
export class AddprofileComponent implements OnInit {
  name!: string;
  totalExprience!: any;
  currentLocation!: string;
  contactNo!: any;
  emailId!: string;
  primarySkills!: string;
  secondarySkills!: string;
  remarks!: string;
  users: any;
  file: any;
  fileName!: string;
  jdId!: any;

  constructor(
    private notifications: NotificationsService,
    private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute,
    private injector: Injector,
    @Optional() @Inject(MAT_DIALOG_DATA) public dailogData: any
  ) {}

  ngOnInit(): void {
    this.jdId = this.dailogData.jdId;
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  addProfile(myForm: any): void {
    let addprofileDetails = [
      {
        name: this.name,
        totalExprience: this.totalExprience,
        currentLocation: this.currentLocation,
        contactNo: this.contactNo,
        emailId: this.emailId,
        primarySkills: this.primarySkills,
        secondarySkills: this.secondarySkills,
        remarks: this.remarks,
        fileName: this.fileName,
        jdId: this.jdId,
      },
    ];

    if (!myForm.invalid) {
      this.profileService
        .addProfile(addprofileDetails, this.file)
        .pipe(first())
        .subscribe(
          (result) =>
            this.notifications.showNotification('top', 'center', result),
          (err) => console.log(err)
        );
    }
  }
}
