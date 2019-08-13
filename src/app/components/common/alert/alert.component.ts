import {AlertService} from "./../../../services";
import {Component, OnInit} from "@angular/core";
import * as _ from "lodash";

@Component({
    selector: "app-alert",
    templateUrl: "./alert.component.html"
})
export class AlertComponent implements OnInit {
    message: any;
    timeouts = {
        long: 8000,
        short: 3000,
        intermediate: 5000
    };

    constructor(private alertService: AlertService) {}

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => {
            if (!(_.isEmpty(message))) {
                this.message = message;
                const self = this;
                setTimeout(function() { self.message = ""; },
                    _.isUndefined(message["interval"]) ||
                    _.isNull(message["interval"] || !(_.has(this.timeouts, message["interval"])))
                    ? this.timeouts.intermediate
                    : this.timeouts[message["interval"]]);
            }
        });
    }

}
