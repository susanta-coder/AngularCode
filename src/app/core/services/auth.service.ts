import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
    providedIn: "root"
})
export class AuthService {
    private jwtHelper = new JwtHelperService();
    userInfo: any | undefined;
    constructor(private router: Router, private http: HttpClient) {}

    register(user: any): Observable<any> {
        return this.http
            .post<string>(`users/signup`, user, {
                responseType: "text" as "json"
            })
            .pipe(
                map((result) => {
                    return result;
                })
            );
    }

    login(userName: string, password: string): Observable<boolean> {
        return this.http
            .post<string>(
                `users/signin`,
                {
                    userName: userName,
                    password: password
                },
                { responseType: "text" as "json" }
            )
            .pipe(
                map((result) => {
                    localStorage.setItem("access_token", result);
                    return true;
                })
            );
    }

    logout() {
        localStorage.removeItem("access_token");
        this.router.navigate(["login"]);
    }

    get isLoggedIn(): boolean {
        let status = false;
        if (this.getToken) {
            status = true;
        } else {
            status = false;
        }
        return status;
    }

    get getToken(): string {
        return localStorage.getItem("access_token") ?? "";
    }

    get getUserInfo():any {
        return this.jwtHelper.decodeToken(this.getToken);
    }

    referCandidate(candidate: any): Observable<any> {
        return this.http
            .post<string>(`referCandidate`, candidate, {
                responseType: "text" as "json"
            })
            .pipe(
                map((result) => {
                    return result;
                })
            );
    }

    havePermission = (permittedTo: string[]): boolean =>{
        return this.getUserInfo && permittedTo.includes(this.getUserInfo.auth[0].authority);
    }
        
}
