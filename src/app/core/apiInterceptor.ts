import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { retry, catchError, finalize } from "rxjs/operators";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ProgressBarComponent } from "../shared/components/progress-bar/progress-bar.component";
@Injectable()
export class APIInterceptor implements HttpInterceptor {
    private progressBarComponentRef = ProgressBarComponent;
    constructor(
        private dialog: MatDialog,
        private authService: AuthService,
        private router: Router
    ) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const accessToken: string = this.authService.getToken;

        if (req.method == "POST") {
            this.dialog.open(this.progressBarComponentRef, {
                width: "550px",
                disableClose: true
            });
        }

        if (accessToken) {
            req = req.clone({
                url:"api/"+req.url,
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        }else{
            req = req.clone({
                url:"api/"+req.url,
            }); 
        }

        return next.handle(req).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                if (error.error instanceof ErrorEvent) {
                    console.error("An error occurred:", error.error.message);
                } else {
                    console.error(
                        `Backend returned code ${error.status}, ` +
                            `body was: ${error.error}`
                    );
                    if (error.status == 403) {
                        this.authService.logout();
                    }
                }
                return throwError(JSON.parse(error.error));
            }),
            finalize(() => {
                if (req.method == "POST") {
                    this.dialog.closeAll();
                }
            })
        );
    }
}
