import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { JobdescriptionService } from '../../services/jobdescription.service';

@Component({
  selector: 'app-query-response',
  templateUrl: './query-response.component.html',
  styleUrls: ['./query-response.component.scss']
})
export class QueryResponseComponent implements OnInit {
  users: any;

  constructor(
    private notifications: NotificationsService,
    private jobdescriptionService: JobdescriptionService,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    
    this.jobdescriptionService
    .getQueryResponse()
    .pipe(first())
    .subscribe((data) => (this.users = data));
}
  

}
