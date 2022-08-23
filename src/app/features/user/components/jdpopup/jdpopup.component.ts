import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-jdpopup',
  templateUrl: './jdpopup.component.html',
  styleUrls: ['./jdpopup.component.scss'],
})
export class JdpopupComponent implements OnInit {
  user!: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private injector: Injector,
    public dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public dailogData: any
  ) {}
  ngOnInit(): void {
    this.user = this.dailogData.jdDetails;
  }
}
