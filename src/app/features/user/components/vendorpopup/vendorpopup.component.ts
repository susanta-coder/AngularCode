import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-vendorpopup',
  templateUrl: './vendorpopup.component.html',
  styleUrls: ['./vendorpopup.component.scss']
})
export class VendorpopupComponent implements OnInit {
  user!: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private injector: Injector,
    public dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public dailogData: any) { }

  ngOnInit(): void {
    this.user = this.dailogData.detailsVendor;


  }

}
