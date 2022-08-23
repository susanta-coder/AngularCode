import { Component, Inject, Injector, OnInit, Optional } from "@angular/core";
import { AuthService } from "../../../core/services/auth.service";
import { first } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { NotificationsService } from "../../services/notifications.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { UserTypes } from "../../../shared/enums/globalEnum";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
    //Client and Vendor Fileds Var
    organisationName!: string;
    contactPerson!: string;
    location!: string;
    emailId!: string;
    designation!: string;
    contactNo!: string;
    address!: string;
    remarks!: string;
    vendorType!: boolean;

    //Screener Fileds Var
    name!: string;
    totalExperience!: number;
    primarySkill!: string;
    secondarySkill!: string;
    profileDoc!: any;

    //Other Var
    showSpinner: boolean = false;
    error!: string;
    userTypeId: any = { Client: 2, Vendor: 3, Screener: 4,Client_User:5,Vendor_User:6 ,Vendor_Screener:7 };
    userType!: string;
    userTypes = UserTypes;

    constructor(
        private notifications: NotificationsService,
        private auth: AuthService,
        private router: Router,
        private route: ActivatedRoute,
        private injector: Injector,
        @Optional() @Inject(MAT_DIALOG_DATA) public dailogData: any
    ) {}
    ngOnInit(): void {
        this.userType = this.dailogData
            ? this.dailogData.userType
            : this.route.snapshot.data["userTypes"];
        if (this.userType == this.userTypes.Vendor) {
            this.vendorType = true;
        }
    }

    register(myForm: any): void {
        let user = {
            organisationName: this.organisationName,
            contactPerson: this.contactPerson,
            location: this.location,
            emailId: this.emailId,
            designation: this.designation,
            contactNo: this.contactNo,
            address: this.address,
            remarks: this.remarks,
            userName: this.emailId,
            password: "admin",
            roleIds: [this.userTypeId[this.userType]],
            vendorType: this.vendorType, //Vendor
            name: this.name, //Screener
            totalExperience: this.totalExperience, //Screener
            primarySkill: this.primarySkill, //Screener
            secondarySkill: this.secondarySkill, //Screener
            profileDoc: this.profileDoc //Screener
        };

        if (!myForm.invalid) {
            this.auth
                .register(user)
                .pipe(first())
                .subscribe(
                    (result) =>
                        this.notifications.showNotification(
                            "top",
                            "center",
                            result
                        ),
                    (error) => {
                        this.notifications.showNotification(
                            "top",
                            "center",
                            error.message,
                            4
                        );
                    }
                );
        }
    }
}
