import {BaseUtils} from "./utils/base.util";
import {Router} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, RequestOptions, XHRBackend} from "@angular/http";

import {MainRoutesModule} from "./app.routes.module";
import {AppComponent} from "./app.component";
import {RavenErrorHandler} from "./app.errorhandler";

import {
    RnDHttp,
    httpFn,
    AlertService,
    LoaderService,
    NavigationService,
    BaseHttpInterceptor,
    CommonService
} from "./services";
import {
    LoginComponent,
    AlertComponent,
    LoaderComponent
} from "./components/common";
import { MinDateValidatorDirective, MaxDateValidatorDirective } from "./directives";

import {PageNotFoundComponent} from "./components/common";
import {IsUserHasAccess} from "./app.guards";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NgSelectModule } from "@ng-select/ng-select";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AlertComponent,
        LoaderComponent,
        PageNotFoundComponent,
        MinDateValidatorDirective,
        MaxDateValidatorDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        MainRoutesModule,
        HttpClientModule,
        NgSelectModule
    ],
    providers: [
        IsUserHasAccess, CommonService,
        { provide: RnDHttp, useFactory: httpFn, deps: [XHRBackend, RequestOptions] },
        { provide: ErrorHandler, useClass: RavenErrorHandler },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BaseHttpInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {}
}
