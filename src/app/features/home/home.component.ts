import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { RegisterComponent } from "../../shared/components/register/register.component";
import { ReferFriendComponent } from "./components/refer-friend/refer-friend.component";
import { UserTypes } from "../../shared/enums/globalEnum";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})


  export class HomeComponent implements OnInit {
    registerComponentRef = RegisterComponent;
    referFriendComponentRef = ReferFriendComponent;
    opened = false;
    userTypes = UserTypes;
    constructor(private dialog: MatDialog) {}

    ngOnInit(): void {
    }

    openDialog(componentRef: any,userType:string): void {
        let dialogRef = this.dialog.open(componentRef, {
            width: "550px",
            data: { "userType":userType }
        });
    }
}
