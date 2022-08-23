import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../../core/services/auth.service";
import { first } from "rxjs/operators";
import { NotificationsService } from "../../../../shared/services/notifications.service";
@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
    constructor(
        private notifications: NotificationsService,
        private auth: AuthService,
        private router: Router
    ) {}
    userName!: string;
    password!: string;
    error!: string;
    showSpinner: boolean = false;

    ngOnInit(): void {
        if (this.auth.isLoggedIn) {
            this.router.navigate(["user"]);
        }
    }
    login(myForm:any): void {
        if (!myForm.invalid){
            this.auth
                .login(this.userName, this.password)
                .pipe(first())
                .subscribe(
                    (result) => this.router.navigate(["user"]),
                    (error) => {
                        this.notifications.showNotification(
                            "top",
                            "center",
                            error.message,
                            4
                        );
                    }
                );
        } else {
            this.notifications.showNotification(
                "top",
                "center",
                "Invalid credentials",
                3
            );
        }
    }
}
