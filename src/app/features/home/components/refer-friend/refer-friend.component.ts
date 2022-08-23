import { Component, OnInit } from '@angular/core';
import { first } from "rxjs/operators";
import {Router} from '@angular/router';

import { AuthService } from "../../../../core/services/auth.service";
import { NotificationsService } from '../../../../shared/services/notifications.service';
@Component({
  selector: 'app-refer-friend',
  templateUrl: './refer-friend.component.html',
  styleUrls: ['./refer-friend.component.scss']
})
export class ReferFriendComponent implements OnInit {
  refererName!: string;
  refererContactNo!: number;
  refererEmailId!: string;
  name!: string;
  contactNo!: number;
  emailId!: string;
  totalExprience!: number;
  primarySkills!: string;
  currentLocation!:string;
  expectedCtc!: number;
  gender!: string;
  showSpinner:boolean=false;
  error!: string;
  myFiles:string [] = [];
  constructor(private notifications:NotificationsService, private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
  }
  referCandidate(myForm: any): void {

    let candidatedetails ={
      refererName:this.refererName,
      refererContactNo:this.refererContactNo,
      refererEmailId:this.refererEmailId,
      name:this.name,
      contactNo:this.contactNo,
      emailId:this.emailId,
      totalExprience:this.totalExprience,
      primarySkills:this.primarySkills,
      currentLocation: this.currentLocation,
      expectedCtc: this.expectedCtc,
      gender: this.gender
    }

    if (!myForm.invalid) {
        this.auth
            .referCandidate(candidatedetails)
            .pipe(first())
            .subscribe(
                (result) => this.notifications.showNotification("top","center",result),
                (err) => (console.log(err))

            );
    }
}
}
