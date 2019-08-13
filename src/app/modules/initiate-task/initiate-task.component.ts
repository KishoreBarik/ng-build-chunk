import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: "app-initiate-task",
    templateUrl: "./initiate-task.component.html"
})
export class InitiateTaskComponent implements OnInit {
    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit() {

    }
}
