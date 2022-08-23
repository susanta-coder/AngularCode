import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { first } from "rxjs/operators";
import {Router} from '@angular/router';
import { JobdescriptionService } from '../../services/jobdescription.service';

@Component({
  selector: 'app-create-jd',
  templateUrl: './create-jd.component.html',
  styleUrls: ['./create-jd.component.scss']
})
export class CreateJdComponent implements OnInit {
  primarySkills!: string;
  srNo!:number;
  description!:string;
  secondarySkills!:string;
  location!:string;
  minExperience!:string;
  maxExerience!:string;
  positions!:string;
  publishTo!:any;
  designation!:string;
  constraints!:string;
  qualification!:string;
  hiringType!:string;
  createdFor!:string;
  feedbackType!:string;
  isShiftInvolved!:string;
  skillCategory!:string;
  noticePeriod!:string;
  slaFinalDate!:any;
  jdComplexity!:string;
  goodToHave!:string;
  maxCtcYal!:string;
  contractPeriod!:string;
  users:any;
  file: any;
  fileName!:string;
  roleId=3;

  constructor(private notifications:NotificationsService, private jobdescriptionService:JobdescriptionService, private router: Router) { }


  ngOnInit(): void {
    this.jobdescriptionService.getAllUserDetailsByRoleId(this.roleId)
    .pipe(first())
    .subscribe(data => this.users = data);
  }
  onChange(event:any) {
    this.file = event.target.files[0];
}

  createJd(myForm: any): void {

    let jddetails ={
      primarySkills:this.primarySkills,
      srNo:this.srNo,
      location:this.location,
      description:this.description,
      secondarySkills:this.secondarySkills,
      minExperience:this.minExperience,
      maxExerience:this.maxExerience,
      positions:this.positions,
      publishTo: this.publishTo,
      designation:this.designation,
      fileName:this.fileName,
      constraints:this.constraints,
      qualification:this.qualification,
      hiringType:this.hiringType,
      createdFor:this.createdFor,
      feedbackType:this.feedbackType,
      isShiftInvolved:this.isShiftInvolved,
      skillCategory:this.skillCategory,
      noticePeriod:this.noticePeriod,
      slaFinalDate:this.slaFinalDate,
      jdComplexity:this.jdComplexity,
      goodToHave:this.goodToHave,
      maxCtcYal:this.maxCtcYal,
      contractPeriod!:this.contractPeriod,
    }

    if (!myForm.invalid) {
        this.jobdescriptionService
            .createJd(jddetails,this.file)
            .pipe(first())
            .subscribe(
                (result) => this.notifications.showNotification("top","center",result),
                (err) => (console.log(err))
            );
    }
}

}
