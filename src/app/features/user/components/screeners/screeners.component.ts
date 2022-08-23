import { Component, OnInit } from "@angular/core";
import { NotificationsService } from "../../../../shared/services/notifications.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
    selector: "app-screeners",
    templateUrl: "./screeners.component.html",
    styleUrls: ["./screeners.component.scss"]
})
export class ScreenersComponent implements OnInit {
    users: any;
    roleId = 4;
    isLoading: boolean = false;
    constructor(
        private notifications: NotificationsService,
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.userService
            .getAllUserDetailsByRoleId(this.roleId)
            .pipe(first())
            .subscribe((data) => {
                this.isLoading = false;
                this.users = data;
            });
    }
}
