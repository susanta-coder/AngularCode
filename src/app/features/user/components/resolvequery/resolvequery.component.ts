import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { JobdescriptionService } from '../../services/jobdescription.service';

@Component({
  selector: 'app-resolvequery',
  templateUrl: './resolvequery.component.html',
  styleUrls: ['./resolvequery.component.scss']
})
export class ResolvequeryComponent implements OnInit {
  user!: any;
  feedback!: any;
  message!: any;
  query!: any;
  id!: any;

  constructor(
    private notifications: NotificationsService,
    private jobdescriptionService: JobdescriptionService,
    private router: Router,
    private route: ActivatedRoute,
    private injector: Injector,
    @Optional() @Inject(MAT_DIALOG_DATA) public dailogData: any
  ) { }

  ngOnInit(): void {
    this.user = this.dailogData.user;


  }
  resolveQuery(myForm: any): void {
    let resolvedqueryDetails =
    {
      feedback: this.feedback,
      message: this.user.message,
      query: this.user.query,
      id!: this.user.id,
    };
    if (!myForm.invalid) {
      this.jobdescriptionService
        .resolveQuery(resolvedqueryDetails)
        .pipe(first())
        .subscribe(
          (result) => this.notifications.showNotification("top", "center", result),
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
}