import { Component, OnInit } from "@angular/core";
import { NotificationsService } from "../../../../shared/services/notifications.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
    selector: "app-client-users",
    templateUrl: "./client-users.component.html",
    styleUrls: ["./client-users.component.scss"]
})
export class ClientUsersComponent implements OnInit {
    users: any;
    roleId = 5;
    jdStatus='Open';
    candidateStatus='Selected';

    constructor(
        private notifications: NotificationsService,
        private userService: UserService,
        private router: Router
    ) {}

    isLoading: boolean = false;

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

    getJdDetailsBasedClientUserIdHyperLink(clientuserId: any) {
      this.userService.getJdDetailsByClientUserId(clientuserId);
    }
    getOpenJdDetailsBasedClientUserIdHyperLink(userId: any) {
      this.userService.getOpenJdDetailsBasedClientUserIdHyperLink(
        userId,
        this.jdStatus
      );
    }

    getprofilereceivedCountHyperLink(clientuserId: any) {
      this.userService.getprofilereceivedCountHyperLink(clientuserId);
    }
    getscreeningSelectCountHyperLink(clientuserId: any) {
      this.userService.getscreeningSelectCountHyperLink(clientuserId,this.candidateStatus);
    }



}
