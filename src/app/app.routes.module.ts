import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent, PageNotFoundComponent} from "./components/common";
import {IsUserHasAccess} from "./app.guards";
import {Angulartics2Module} from "angulartics2";
import {AppCustomPreloader} from "./app.routing.loader";

const APP_ROUTES: Routes = [
    { path: "login", component: LoginComponent },
    { path: "initiate", loadChildren: "./modules/initiate-task/initiate-task.module#InitiateTaskModule" },
    { path: "", component: LoginComponent, pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: AppCustomPreloader }),
        Angulartics2Module.forRoot()
    ],
    exports: [
        RouterModule
    ],
    providers: [AppCustomPreloader]
})
export class MainRoutesModule {
}
