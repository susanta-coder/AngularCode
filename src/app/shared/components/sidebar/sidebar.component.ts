import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../core/services/auth.service";
import { ROUTES } from "../../routeList";

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
    menuItems: any[] = ROUTES;

    constructor(private auth: AuthService) {}

    ngOnInit() {}
    havePermission = (permittedTo: string[]) => this.auth.havePermission(permittedTo);
    isMobileMenu = () => ($(window).width()! > 991) ? false : true;
}
