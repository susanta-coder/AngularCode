import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { JobdescriptionService } from '../../services/jobdescription.service';

@Component({
  selector: 'app-createquery',
  templateUrl: './createquery.component.html',
  styleUrls: ['./createquery.component.scss']
})
export class CreatequeryComponent implements OnInit {
  jdId!: any;
  message!: any;
  query!: any;
  users: any;

  constructor(
    private notifications: NotificationsService,
    private jobdescriptionService: JobdescriptionService,
    private router: Router,
    private route: ActivatedRoute,
    private injector: Injector,
    @Optional() @Inject(MAT_DIALOG_DATA) public dailogData: any
  ) { }

  ngOnInit(): void {
    this.jdId = this.dailogData.jdId;
  }
  createQuery(myForm: any): void {
    let createqueryDetails =
    {
      jdId: this.jdId,
      message: this.message,
      query: this.query,
    };
    if (!myForm.invalid) {
      this.jobdescriptionService
        .createQuery(createqueryDetails)
        .pipe(first())
        .subscribe(
          (result) => this.notifications.showNotification("top", "center", result),
          (err) => (console.log(err)
          )
        );
    }
  }
}
