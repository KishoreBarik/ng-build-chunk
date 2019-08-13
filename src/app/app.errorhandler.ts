import * as Raven from "raven-js";
import {ErrorHandler} from "@angular/core";
import {environment} from "../environments/environment";

Raven
    .config(environment.sentyUrl, {
        "maxBreadcrumbs": 50
    })
    .install();

export class RavenErrorHandler implements ErrorHandler {
    handleError(err: any): void {
        if (environment.sentyUrl != "") {
            try {
                Raven.captureException(err.originalError || err);
            } catch (e) {
                console.log("failed saving the error information in sentry", e);
            }
        } else {
            console.log(err);
        }
    }
}
