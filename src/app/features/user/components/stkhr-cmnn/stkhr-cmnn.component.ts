import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { JobdescriptionService } from '../../services/jobdescription.service';
import { ResolvequeryComponent } from '../resolvequery/resolvequery.component';

@Component({
  selector: 'app-stkhr-cmnn',
  templateUrl: './stkhr-cmnn.component.html',
  styleUrls: ['./stkhr-cmnn.component.scss']
})
export class StkhrCmnnComponent implements OnInit {
  users: any;
  user!: any;
  isLoading: boolean = false;
  resolvequeryComponentRef = ResolvequeryComponent;

  constructor(
    private jobdescriptionService: JobdescriptionService,
    public dialog: MatDialog,


  ) { }

  ngOnInit(): void {
    this.jobdescriptionService
      .getStkhrQuery()
      .pipe(first())
      .subscribe((data) => (this.users = data));
  }
  openDialog(resolvequeryComponentRef: any, user: any): void {
    let dialogRef = this.dialog.open(resolvequeryComponentRef, {
      width: '550px',
      data: { user: user },
    });
  }

}