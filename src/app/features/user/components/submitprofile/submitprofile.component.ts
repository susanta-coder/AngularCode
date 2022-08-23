import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileService } from '../../services/profile.service';
import { JdpopupComponent } from '../jdpopup/jdpopup.component';
import { JobdescriptionService } from '../../services/jobdescription.service';

@Component({
  selector: 'app-submitprofile',
  templateUrl: './submitprofile.component.html',
  styleUrls: ['./submitprofile.component.scss'],
})
export class SubmitprofileComponent implements OnInit {
  dob!: string;
  qualification!: any;
  location!: string;
  currentCtc!: any;
  expectedCtc!: any;
  otherSkills!: any;
  communication!: any;
  noticePeriod!: any;
  totalExperience!: any;
  relativeExperience!: any;
  relocate!: any;
  abilityToLearn!: any;
  primarySkills!: any;
  screeningResult!: any;
  remarks!: any;
  communicationRating!: any;
  otherSkillsRating!: any;
  abilityToLearnRating!: any;
  primarySkillsRating!: any;
  feedbackType!: any;
  users: any;
  user!: any;
  candidateId!: any;
  id!: any;
  jdDetails: any;
  jdDetailsoutput: any;

  jdpopupComponentRef = JdpopupComponent;

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
    this.candidateId = this.user.id;
    let obj = this.user.candidateProfileStatus;
    for (let i = 0; i < obj.length; i++) {
      this.id = obj[i].id;
    }
  }

  submitFeedback(myForm: any): void {
    let submitFeedBackDetails = {
      dob: this.dob,
      qualification: this.qualification,
      location: this.location,
      currentCtc: this.currentCtc,
      expectedCtc: this.expectedCtc,
      otherSkills: this.otherSkills,
      communication: this.communication,
      noticePeriod: this.noticePeriod,
      totalExperience: this.totalExperience,
      relativeExperience: this.relativeExperience,
      relocate: this.relocate,
      abilityToLearn: this.abilityToLearn,
      primarySkills: this.primarySkills,
      screeningResult: this.screeningResult,
      remarks: this.remarks,
      communicationRating: this.communicationRating,
      otherSkillsRating: this.otherSkillsRating,
      abilityToLearnRating: this.abilityToLearnRating,
      primarySkillsRating: this.primarySkillsRating,
      feedbackType: this.feedbackType,
      candidateId: this.candidateId,
      id: this.id,
    };
    if (!myForm.invalid) {
      this.profileService
        .submitFeedBack(submitFeedBackDetails)
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

  openDialog(jdpopupComponentRef: any, user: any): void {
    this.jobdescriptionService
      .getJdDetailsByJdId(this.user.jdId)
      .pipe(first())
      .subscribe((data) => {
        this.dialog.open(jdpopupComponentRef, {
          width: '580px',
          data: { jdDetails: data },
        });
      });
  }
}
