import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {InitiateTaskComponent} from "./index";


const INITIATE_ROUTES: Routes = [
    { path: ":code", component: InitiateTaskComponent, pathMatch: "full" },
];

@NgModule({
    imports: [
        RouterModule.forChild(INITIATE_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class InitiateTaskRoutesModule {
}
