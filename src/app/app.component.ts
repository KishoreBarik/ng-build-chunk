import {Angulartics2GoogleTagManager} from "angulartics2/gtm";
import {Component, OnInit} from "@angular/core";
import {LoaderService} from "./services";
import {Router, RouteConfigLoadStart, RouteConfigLoadEnd} from "@angular/router";
import {Angulartics2} from "angulartics2";
import {environment} from "../environments/environment";

@Component({
    selector: "rnd-root",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private loaderSvc: LoaderService) {


        // display loader when lazyloaded module is fetched
        this.router.events.subscribe(
            event => {
              if (event instanceof RouteConfigLoadStart ) {
                this.loaderSvc.display(true);
                return;
              }
              if (event instanceof RouteConfigLoadEnd) {
                this.loaderSvc.display(false);
                return;
              }
            }
        );
    }

    ngOnInit() {}

}
