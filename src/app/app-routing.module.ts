import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./features/user/user.component";
import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './core/services/auth.guard';
const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "user",
        component: UserComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "",
                loadChildren: () =>
                    import("./features/user/user.module").then(
                        (m) => m.UserModule
                    )
            }
        ]
    },
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "",
                loadChildren: () =>
                import("./features/home/home.module").then((m) => m.HomeModule)
            }
        ]

    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
